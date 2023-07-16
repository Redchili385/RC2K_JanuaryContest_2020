function formSetup() {

    // Should probably move this to contestData...
    const schedule = [
        {
            date: new Date("2023-08-07"),
            stages: ["Clocaenog Mid", "Penmachno South"]
        },
        {
            date: new Date("2023-08-08"),
            stages: ["Myherin", "Hafren"]
        },
        {
            date: new Date("2023-08-09"),
            stages: ["Dyfi", "Gartheiniog"]
        },
        {
            date: new Date("2023-08-10"),
            stages: ["Chirdonhead"]
        },
        {
            date: new Date("2023-08-11"),
            stages: ["Falstone"]
        },
        {
            date: new Date("2023-08-12"),
            stages: ["Kershope"]
        },
        {
            date: new Date("2023-08-13"),
            stages: ["Pundershaw"]
        },
        {
            date: new Date("2023-08-14"),
            stages: ["Riccarton", "Newcastleton"]
        },
        {
            date: new Date("2023-08-15"),
            stages: ["Twiglees", "Yair", "Cardrona"]
        },
        {
            date: new Date("2023-08-16"),
            stages: ["Black Loch", "Glentrool"]
        },
        {
            date: new Date("2023-08-17"),
            stages: ["Ae"]
        },
        {
            date: new Date("2023-08-18"),
            stages: ["Moon and Star", "Bothwell", "Whitchester"]
        },
        {
            date: new Date("2023-08-19"),
            stages: ["Eccles", "Langton", "Fogo"]
        },
        {
            date: new Date("2023-08-20"),
            stages: ["Hamilton's Folly", "Tyrones Ditches"]
        },
        {
            date: new Date("2023-08-21"),
            stages: ["Feeney", "Parkanaur"]
        },
        {
            date: new Date("2023-08-22"),
            stages: ["Lisnamuck", "Tardree"]
        },
        {
            date: new Date("2023-08-23"),
            stages: ["Port Soderick", "Ballagyr", "Curraghs"]
        },
        {
            date: new Date("2023-07-16"),
            stages: ["Tholt-y-Will", "Injerbreck", "Cringle"]
        }
    ];

    const form = document.getElementById("resultSubmissionForm");
    let currentLeg = checkCurrentLeg(schedule);
    if(currentLeg != null) {
        generateFormContent(form, currentLeg);
    }
}

// Checks if two dates are on the same day (UNIX timestamp)
function isSameDay(date1, date2) {
    let differenceInMilliseconds = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) - Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    let differenceInDays = Math.floor(differenceInMilliseconds/1000/60/60/24);
    return differenceInDays === 0;
}

// Checks which leg is active today and displays this information in the header
function checkCurrentLeg(schedule) {
    const currentLegHeader = document.getElementById("currentLegHeader");
    let currentLeg = schedule.filter(leg => {
        return isSameDay(leg.date, new Date());
    });
    if(currentLeg.length > 1) {
        console.log("Something went wrong! Ensure the schedule is correct!");
    }
    else if(currentLeg.length === 1) {
        currentLeg = currentLeg[0];
        let currentLegStages = currentLeg.stages;
        currentLegHeader.textContent = "Current leg: ";
        currentLegHeader.textContent += currentLegStages[0];
        for(let stage_no = 1; stage_no < currentLegStages.length; stage_no++) {
            currentLegHeader.textContent += (", " + currentLegStages[stage_no]);
        }
        return currentLeg;
    }
    return null;
}

function generateFormContent(form, currentLeg) {
    const field_driver = document.createElement("div");
    const label_driver = document.createElement("label");
    const input_driver = document.createElement("input");

    field_driver.setAttribute("id", "field_driver");
    label_driver.setAttribute("id", "label_driver");
    input_driver.setAttribute("id", "input_driver");

    field_driver.appendChild(label_driver);
    field_driver.appendChild(input_driver);
    
    form.appendChild(field_driver);

    currentLeg.stages.forEach(stage => {
        // Add form section for each stage
        const fieldset_stage = document.createElement("fieldset");
        fieldset_stage.setAttribute("id", "fieldset_" + stage);
        fieldset_stage.setAttribute("class", "fieldset_stage");
        form.appendChild(stageSection);
    });
}
formSetup();