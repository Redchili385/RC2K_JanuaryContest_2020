class Website{
    constructor(){
        this.contests = [];
        this.users = [];
        this.game = new Game();
    }
    GetUserIDByName(name){
        function checkName(user){
            if(user.name == name)
                return true;
            return false;
        }
        return this.users.findIndex(checkName);
    }
    GetUserByName(name){
        return this.users[this.GetUserIDByName(name)];
    }
}

class Game{
    constructor(){
        this.rallies = [];
    }
    AddRally(rally){
        rally.id = this.rallies.length;
        this.rallies.push(rally);
    }
}

class User{
    constructor(name, country = ""){
        this.name = name;
        this.country = country;
    }
}

class Participant{
    constructor(user, color, car){
        this.user = user
        this.color = color
        this.car = car
    }
    
}

class Contest{
    constructor(name){
        this.name = name
        this.participants = []
        this.rallies = []
    }
    AddRally(rally){
        rally.id = this.rallies.length;
        this.rallies.push(rally);
    }
    GetParticipantIDByName(name){
        function checkName(participant){
            if(participant.user.name == name)
                return true
            return false
        }
        return this.participants.findIndex(checkName)
    }
    GetParticipantByName(name){
        return this.participants[this.GetParticipantIDByName(name)]
    }
    generateFinalSummary(){
        this.summaryRally = new Rally("Final")
        for(let i = 0; i< this.rallies.length; i++){
            let rally = this.rallies[i];
            let summaryRally_stage = rally.generateSummary(this.participants.length)  // Stage object
            let direction_wr_centiseconds = {"arcade": 0, "simulation": 0}   //somar os wr de cada stage em um rally
            for(let j = 0; j < rally.stages.length; j++){ 
                let stage = rally.stages[j];
                for(let k in stage.wr){    
                    let current_direction_wr = stage.wr[k][0];
                    direction_wr_centiseconds[k] += current_direction_wr.centiseconds;
                }
            }
            summaryRally_stage.AddWorldRecord(direction_wr_centiseconds["arcade"],direction_wr_centiseconds["simulation"]);
            this.summaryRally.stages.push(summaryRally_stage)
        }
    }
}

class Rally{
    constructor(name, id){
        this.id = id;
        this.name = name
        this.stages = []
    }
    generateSummary(nParticipants, stages = this.stages){
        this.summary = new Stage(this.name + " Summary");
        this.summary.imageURL = "../../resources/rally" + this.id + ".PNG";
        let participants = []  //name to participant object
        let centiseconds_initial_hash = []
        let penalty_hash = []
        let verified_hash = []
        let number_hash = []  //number of stages completed [participant_name]
        let points_hash = []
        for(let i = 0; i< stages.length; i++){
            let stage = stages[i];
            for(let j = 0; j< stage.records.length; j++){
                let record = stage.records[j];
                let name = record.participant.user.name;
                if(!participants[name]){
                    participants[name] = record.participant;
                    centiseconds_initial_hash[name] = record.centiseconds_initial;
                    penalty_hash[name] = record.centiseconds_penalty;
                    verified_hash[name] = record.verified
                    number_hash[name] = 1;
                    if(typeof(record.points) !== "undefined"){
                        points_hash[name] = record.points;
                    }
                }
                else{
                    if(record.centiseconds_initial < 0){
                        if(this.id !== 6){
                            centiseconds_initial_hash[name] = -1
                            penalty_hash[name] = -1
                            points_hash[name] = 0;
                        }
                        verified_hash[name] = "DNF"
                        number_hash[name] += 1;   
                    }
                    else{
                        centiseconds_initial_hash[name] += record.centiseconds_initial;
                        penalty_hash[name] += record.centiseconds_penalty;
                        if(record.verified == "No"){verified_hash[name] = "No"}
                        number_hash[name] += 1;
                        if(typeof(record.points) !== "undefined"){
                            points_hash[name] += record.points;
                        }
                    }
                }
            }
        }
        for(let key in centiseconds_initial_hash){
            if(number_hash[key] == 6 || this.id == 6){
                let participant = participants[key];
                this.summary.AddRecord(participant,centiseconds_initial_hash[key],penalty_hash[key],verified_hash[key])
            }
        }
        this.summary.RecordsSorted_Centiseconds()
        for(let i = 0; i< this.summary.records.length; i++){
            let record = this.summary.records[i];
            let key = record.participant.user.name;
            if(typeof(points_hash[key]) !== "undefined"){
                record.points = points_hash[key]
            }
            else{
                record.points = nParticipants - i;
            }
        }
        return this.summary;
    }
}

class Stage{
    constructor(name, id){
        this.id = id;
        this.name = name;
        this.records = []
        this.imageURL = undefined;
        this.wr = {
            "arcade": [],
            "simulation": []
        };
    }
    AddRecord(participant, time, penalty, verified){
        let newRecord = new Record(participant,time,penalty,verified)
        this.records.push(newRecord)
        return newRecord;
    }
    AddWorldRecord(ArcadeTime, SimulationTime){
        if(ArcadeTime){
            this.wr["arcade"].push(new Record(new Participant(new User("RecordHolder", ""), "#000000",""), ArcadeTime,"00:00.00", "yes"));
        }
        if(SimulationTime){
            this.wr["simulation"].push(new Record(new Participant(new User("RecordHolder", ""), "#000000",""), SimulationTime,"00:00.00", "yes"));
        }
    }
    AddArcadeWorldRecord(user, time, carName = "Mitsubishi Lancer Evo V"){
        let record = new Record(new Participant(user, "#000000",carName), time,"00:00.00", "yes")
        this.wr["arcade"].push(record);
        return record;
    }
    AddSimulationWorldRecord(user, time, carName = "Mitsubishi Lancer Evo V"){
        let record = new Record(new Participant(user, "#000000",carName), time,"00:00.00", "yes")
        this.wr["simulation"].push(record);
        return record;
    }
    RecordsSorted_Centiseconds(){  //compare centiseconds
        return this.records.sort(function (a,b){
            if(a.centiseconds < 0)
                return Number.POSITIVE_INFINITY
            if(b.centiseconds < 0)
                return Number.NEGATIVE_INFINITY
            return (a.centiseconds - b.centiseconds)
        })
    }
    RecordsSorted_Points(){
        return this.records.sort((a,b) => b.points - a.points)
    }
    CreateContestEntireStageTable(div, finalLevel){
        this.CreateContestStageTable(this.CreateStageTable(div), finalLevel);
    }
    CreateWorldRecordEntireStageTable(div, direction){
        this.CreateWorldRecordStageTable(this.CreateStageTable(div), direction);
    }
    CreateStageTable(div){  //div = space for the table  //finalLevel 0: Normal Stages, 1: RallySummaries, 2:Final Contest Summary
        let divStage = document.createElement('div')
        divStage.className = "divStage"
        let divTitleImage = document.createElement('div')
        divTitleImage.className = "divTitleImage"

        let newTitle = document.createElement('h4')
        newTitle.innerHTML = this.name
        newTitle.className = "stageName"
        divTitleImage.appendChild(newTitle)

        let newImage = document.createElement("img")
        newImage.src = this.getImageUrl();
        newImage.className = "mapImage"
        divTitleImage.appendChild(newImage)
        
        divStage.appendChild(divTitleImage)

        div.appendChild(divStage)

        return divStage   //returning 
    }
    CreateContestStageTable(divStage, finalLevel){
        let newTable = document.createElement('table')
        newTable.setAttribute("class", "table")
        let string_lastColumn = finalLevel==0 ? "Verified?":"Points"
        let proofColumn = finalLevel==0?`<th scope="col">Proofs</th>`:``
        newTable.innerHTML = 
            `<thead class="thead-dark">
                <tr>
                    <th scope="col">Ranking</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Time</th>
                    <th scope="col">Penalty</th>
                    <th scope="col">Time (+Penalty)</th>
                    <th scope="col">`+string_lastColumn+`</th>
                    ${proofColumn}
                </tr>
            </thead>
            <tbody>`
        if (this.records.length === 0) { // Fills empty tables with a "Check back later" message.
            newTable.innerHTML+=`<tr><td style="color: gray;" colspan="100%" rowspan="2">The results aren't complete yet. Please check back later.</td></tr>`;
        }
        else {
            let records = finalLevel==2 ? this.RecordsSorted_Points() :  this.RecordsSorted_Centiseconds()
            for(let j = 0; j< records.length; j++)
            {
                let flagImg = `<img src="../../resources/flags/${records[j].participant.user.country}.png" style="height: 16px; border: 1px solid #CCC;"></img>`;
                let value_lastColumn = finalLevel==0? records[j].verified:records[j].points
                let proofRow = finalLevel==0?`<td>${this.proofsToDiv(records[j].proofs)}</td>`:``
                newTable.innerHTML+= 
                `
                <tr>
                    <th scope="row">`+(j+1)+`</th>
                    <td>${flagImg} `+ records[j].participant.user.name +` ${flagImg}</td>
                    <td>`+ records[j].time + `</td>
                    <td>`+ records[j].penalty +`</td>
                    <td>`+ records[j].timePenalty +`</td>
                    <td>`+ value_lastColumn +`</td>
                    ${proofRow}
                </tr>
                `
            }
        }
        newTable.innerHTML+= `</tbody>`
        
        divStage.appendChild(newTable);
    }
    CreateWorldRecordStageTable(divStage, direction){
        let newTable = document.createElement('table');
        newTable.setAttribute("class", "table");
        newTable.innerHTML = 
            `<thead class="thead-dark">
                <tr>
                    <th scope="col">Ranking</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Time</th>
                    <th scope="col">Car</th>
                    <th scope="col">Proofs</th>
                </tr>
            </thead>
            <tbody>`
        let records = this.wr[direction];
        for(let j = 0; j< records.length; j++)
        {
            let flagImg = `<img src="../../resources/flags/${records[j].participant.user.country}.png" style="height: 16px; border: 1px solid #CCC;"></img>`;
            
            newTable.innerHTML+= 
            `
            <tr>
                <th scope="row">`+(j+1)+`</th>
                <td>${flagImg} `+ records[j].participant.user.name +` ${flagImg}</td>
                <td>`+ records[j].time + `</td>
                <td>`+ records[j].participant.car + `</td>
                <td>`+ this.proofsToDiv(records[j].proofs) + `</td>
            </tr>
            `
        }
        newTable.innerHTML+= `</tbody>`
        
        divStage.appendChild(newTable);
    }
    proofsToDiv(proofs){
        let proofsImages = "";
        proofs.youtube !== null ? proofsImages += `<a href=${proofs.youtube}><img src="../../resources/youtube_icon.png" style="height: 16px; border: 1px solid #CCC;"></img></a>`: null;
        proofs.image !== null ? proofsImages += `<a href=${proofs.image}><img src="../../resources/image_icon.png" style="height: 16px; border: 1px solid #CCC;"></img></a>`: null;
        proofs.replay !== null ? proofsImages += `<a href=${proofs.replay}><img src="../../resources/replay_icon.png" style="height: 16px; border: 1px solid #CCC;"></img></a>`: null;
        return proofsImages;
    }
    getImageUrl(){
        if(typeof(this.id) !== "undefined"){
            return "../../resources/Stages/Images/stage"+ (this.id <10 ?"0":"") + this.id + ".png";
        }
        return this.imageURL;
    }
}

class Record{
    constructor(participant, time, penalty, verified){
        this.participant = participant;
        if(typeof(time) == "number"){
            this.centiseconds_initial = time;
            this.time = this.CentisecondsToTime(this.centiseconds_initial);
        }
        else{
            this.time = time; //string
            this.centiseconds_initial = this.TimeToCentiseconds(this.time);  //int
        }
        if(typeof(penalty) == "number"){
            this.centiseconds_penalty = penalty;
            this.penalty = this.CentisecondsToTime(this.centiseconds_penalty);
        }
        else{
            this.penalty = penalty; //string
            this.centiseconds_penalty = this.TimeToCentiseconds(this.penalty);  //int
        }
        this.centiseconds = this.centiseconds_initial + this.centiseconds_penalty; //int
        this.timePenalty = this.CentisecondsToTime(this.centiseconds);  //string
        this.verified = verified;
        this.proofs = {
            "youtube": null,
            "image": null,
            "replay": null
        }
    }
    TimeToCentiseconds(time){   //string to int
        if(time == "DNF")
            return -1
        let centiseconds = 0;
        let index = time.lastIndexOf('.')
        centiseconds += parseInt(time.slice(index+1,index+3))
        time = time.slice(0,index)
        index = time.lastIndexOf(':')
        centiseconds += 100 * parseInt(time.slice(index+1, time.length))   //seconds
        time = time.slice(0,index)
        index = time.lastIndexOf(':')
        centiseconds += 60 * 100 * parseInt(time.slice(index+1, time.length)) //minutes
        if(index === -1) return centiseconds;
        time = time.slice(0, index)
        centiseconds += 60 * 60 * 100 * parseInt(time.slice) //hours
        return centiseconds
    }
    CentisecondsToTime(centiseconds){
        if(centiseconds < 0)
            return "DNF"
        let number_string = "";
        let hours = ~~(centiseconds/(100*60*60))
        if(hours > 0){
            number_string += this.addZero(hours) + ":";
            centiseconds %= 100*60*60;
        }
        number_string += this.addZero(~~(centiseconds/(100*60))) + ":";
        centiseconds %= 100*60;
        number_string += this.addZero(~~(centiseconds/100))+".";
        centiseconds %= 100;
        number_string += this.addZero(centiseconds);
        return number_string
    }
    addZero(number){  //int 5 turns string "05"
        if(number < 10){
            return "0" + number
        }
        return ""+number
    }
}


