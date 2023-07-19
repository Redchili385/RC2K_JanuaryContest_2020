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
            date: new Date("2023-07-19"),
            stages: ["Lisnamuck", "Tardree"]
        },
        {
            date: new Date("2023-08-23"),
            stages: ["Port Soderick", "Ballagyr", "Curraghs"]
        },
        {
            date: new Date("2023-08-24"),
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
    const select_driver = document.createElement("select");

    setAttributes(field_driver, {"id": "field_driver", "class": "formField"});
    setAttributes(label_driver, {"id": "label_driver"});
    setAttributes(select_driver, {"id": "select_driver"});

    label_driver.textContent = "Driver";
    field_driver.appendChild(label_driver);

    // Read contest participants and put them in a select list
    const contest = contestData();
    contest.participants.forEach(participant => {
        const select_driver_option = document.createElement("option");
        setAttributes(select_driver_option, {"id": "select_driver_option_" + participant.user.name, "class": "select_driver_option", "required": "true"});
        select_driver_option.textContent = participant.user.name;
        select_driver.appendChild(select_driver_option);
        field_driver.appendChild(select_driver);
    })

    form.appendChild(field_driver);

    // Add form section for each stage
    currentLeg.stages.forEach(stage => {
        const fieldset_stage = document.createElement("fieldset");
        const legend_stage = document.createElement("legend");
        const field_time = document.createElement("div");
        const field_time_min = generateFormField("Time", "timeMin_" + stage, "timeMin", "number", "MM");
        const span_timeSeparator_minSec = document.createElement("span");
        const field_time_sec = generateFormField("", "timeSec_" + stage, "timeSec", "number", "SS");
        const span_timeSeparator_secCS = document.createElement("span");
        const field_time_cs = generateFormField("", "timeCS_"  + stage, "timeCS", "number", "CS");
        const field_twitchLink = generateFormField("Twitch Link", "twitchLink_" + stage, "twitchLink", "text", "https://www.twitch.tv/videos/1820025316");
        const field_replayFile = generateFormField("Replay File", "replayFile_" + stage, "replayFile", "file", "");
        const field_youtubeLink = generateFormField("Youtube Link", "ytLink_" + stage, "ytLink", "text", "https://youtu.be/dQw4w9WgXcQ");
        const field_timeImage = generateFormField("Time Image", "timeImage_" + stage, "timeImage", "file", "");
        const input_time_min = field_time_min.getElementsByTagName("input")[0];
        const input_time_sec = field_time_sec.getElementsByTagName("input")[0];
        const input_time_cs = field_time_cs.getElementsByTagName("input")[0];
        const input_timeImage = field_timeImage.getElementsByTagName("input")[0];

        setAttributes(fieldset_stage, {"id": "fieldset_" + stage, "class": "fieldset_stage"});
        setAttributes(legend_stage, {"id": "legend_" + stage, "class": "legend_stage"});
        setAttributes(field_time, {"id": "time_" + stage, "class": "time"});
        setAttributes(input_time_min, {"min": "0", "max": "99", "oninput": "addLeadingZero(this)", "required": "true"});
        setAttributes(span_timeSeparator_minSec, {"id": "span_timeSeparator_minSec_" + stage, "class": "span_timeSeparator span_timeSeparator_minSec"});
        setAttributes(input_time_sec, {"min": "0", "max": "59", "oninput": "addLeadingZero(this)", "required": "true"});
        setAttributes(span_timeSeparator_secCS, {"id": "span_timeSeparator_secCS_" + stage, "class": "span_timeSeparator span_timeSeparator_secCS"});
        setAttributes(input_time_cs, {"min": "0", "max": "99", "oninput": "addLeadingZero(this)", "required": "true"});
        setAttributes(input_timeImage, {"accept": "image/*"});

        field_time_min.classList.add("field_time");
        field_time_sec.classList.add("field_time");
        field_time_cs.classList.add("field_time");
        input_time_min.classList.add("input_time");
        input_time_sec.classList.add("input_time");
        input_time_cs.classList.add("input_time");
        
        legend_stage.textContent = stage;
        span_timeSeparator_minSec.textContent = ":";
        span_timeSeparator_secCS.textContent = ".";

        field_time.appendChild(field_time_min);
        field_time.appendChild(span_timeSeparator_minSec);
        field_time.appendChild(field_time_sec);
        field_time.appendChild(span_timeSeparator_secCS);
        field_time.appendChild(field_time_cs);
        fieldset_stage.appendChild(legend_stage);
        fieldset_stage.appendChild(field_time);
        fieldset_stage.appendChild(field_twitchLink);
        fieldset_stage.appendChild(field_replayFile);
        fieldset_stage.appendChild(field_youtubeLink);
        fieldset_stage.appendChild(field_timeImage);
        form.appendChild(fieldset_stage);
    });

    // Submit button
    const button_submit = document.createElement("button");
    const img_leftArrow = document.createElement("img");
    const img_rightArrow = document.createElement("img");
    const navspan = document.createElement("span");
    
    setAttributes(button_submit, {"id": "submitResult", "class": "submitBtn", "type": "submit", "onmouseover": "turnButtonRed(this)", "onmouseout": "turnButtonWhite(this)"});
    setAttributes(img_leftArrow, {"class": "leftArrow", "src": '../../resources/navleft.png'});
    setAttributes(navspan, {"id": "submit_result", "class": "navspan"});
    setAttributes(img_rightArrow, {"class": "rightArrow", "src": '../../resources/navright.png'});

    navspan.textContent = "Submit";
    button_submit.appendChild(img_leftArrow);
    button_submit.appendChild(navspan);
    button_submit.appendChild(img_rightArrow);
    form.appendChild(button_submit);
}

// Generic form field factory
function generateFormField(labelText, domId, domClass, inputType, placeholder) {
    const field = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    setAttributes(field, {"id": "field_" + domId, "class": "formField field_" + domClass});
    setAttributes(label, {"id": "label_" + domId, "class": "label_" + domClass});
    setAttributes(input, {"id": "input_" + domId, "class": "input_" + domClass, "type": inputType, "placeholder": placeholder});

    label.textContent = labelText;

    if(inputType !== "file") {
        label.setAttribute("for", "input_" + domId)
    }
    field.appendChild(label);
    if(inputType === "file") {
        const altContainer = document.createElement("div");
        const altButton = document.createElement("label");
        const p_fileName = document.createElement("p");

        setAttributes(altContainer, {"id": "uploadBtnContainer_" + domId, "class": "uploadBtnContainer uploadBtnContainer_" + domClass});
        setAttributes(altButton, {"id": "uploadBtn_" + domId, "class": "altBtn uploadBtn uploadBtn_" + domClass, "for": "input_" + domId});
        setAttributes(p_fileName, {"id": "p_fileName_" + domId, "class": "p_fileName p_fileName" + domClass});
        input.setAttribute("onchange", "displayInputFileName(this)");

        altButton.textContent = "Upload";
        altContainer.appendChild(altButton);
        altContainer.appendChild(p_fileName);

        field.appendChild(altContainer);
    }
    field.appendChild(input);

    return field;
}

function displayInputFileName(fileInput) {
    if(fileInput.files.length === 1) {
        fileInput.parentNode.querySelector(".p_fileName").textContent = fileInput.files[0].name;
    }
}

// Set multiple attributes of an element by passing an object of attributes
function setAttributes(element, attributes) {
    for(var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function addLeadingZero(input) {
    if(input.value.toString().length === 1) {
        input.value = "0" + input.value.toString();
    }
    // Prevent more than 2 digits (manual input)
    else if(input.value.toString().length > 2) {
        input.value = input.value.toString().substr(-2, 2);
    }
}

formSetup();