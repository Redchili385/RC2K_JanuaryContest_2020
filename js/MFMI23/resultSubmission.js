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
    const field_driver = generateFormField("Driver", "driver", "driver", "text");

    form.appendChild(field_driver);

    // Add form section for each stage
    currentLeg.stages.forEach(stage => {
        const fieldset_stage = document.createElement("fieldset");
        const legend_stage = document.createElement("legend");
        const field_time = document.createElement("div");
        const field_time_min = generateFormField("MM", "timeMin_" + stage, "timeMin", "number");
        const span_timeSeparator_minSec = document.createElement("span");
        const field_time_sec = generateFormField("SS", "timeSec_" + stage, "timeSec", "number");
        const span_timeSeparator_secCS = document.createElement("span");
        const field_time_cs = generateFormField("CS", "timeCS_"  + stage, "timeCS", "number");
        const field_twitchLink = generateFormField("Twitch Link", "twitchLink_" + stage, "twitchLink", "text");
        const field_replayFile = generateFormField("Replay File", "replayFile_" + stage, "replayFile", "file");
        const field_youtubeLink = generateFormField("Youtube Link", "ytLink_" + stage, "ytLink", "text");
        const field_timeImage = generateFormField("Time Image", "timeImage_" + stage, "timeImage", "file");

        setAttributes(field_time_min.getElementsByTagName("input")[0], {"min": "0", "max": "99", value: "00", "oninput": "addLeadingZero(this)"});
        setAttributes(span_timeSeparator_minSec, {"id": "span_timeSeparator_minSec_" + stage, "class": "span_timeSeparator_minSec"});
        setAttributes(field_time_sec.getElementsByTagName("input")[0], {"min": "0", "max": "59", value: "00", "oninput": "addLeadingZero(this)"});
        setAttributes(span_timeSeparator_secCS, {"id": "span_timeSeparator_secCS_" + stage, "class": "span_timeSeparator_secCS"});
        setAttributes(field_time_cs.getElementsByTagName("input")[0], {"min": "0", "max": "99", value: "00", "oninput": "addLeadingZero(this)"});
        setAttributes(fieldset_stage, {"id": "fieldset_" + stage, "class": "fieldset_stage"});
        setAttributes(legend_stage, {"id": "legend_" + stage, "class": "legend_stage"});
        
        legend_stage.textContent = stage;
        span_timeSeparator_minSec.textContent = ":";
        span_timeSeparator_secCS.textContent = ".";

        field_time.appendChild(field_time_min);
        field_time.appendChild(span_timeSeparator_minSec);
        field_time.appendChild(field_time_sec);
        field_time.appendChild(span_timeSeparator_secCS);
        field_time.appendChild(field_time_cs);
        fieldset_stage.appendChild(field_time);
        fieldset_stage.appendChild(field_twitchLink);
        fieldset_stage.appendChild(field_replayFile);
        fieldset_stage.appendChild(field_youtubeLink);
        fieldset_stage.appendChild(field_timeImage);
        form.appendChild(legend_stage);
        form.appendChild(fieldset_stage);
    });

    const button_submit = document.createElement("button");
    setAttributes(button_submit, {"id": "submitResult", "class": "submitBtn navspan", "type": "submit"});
    button_submit.textContent = "Submit";
    form.appendChild(button_submit);
}

function generateFormField(labelText, domId, domClass, inputType) {
    const field = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");

    setAttributes(field, {"id": "field_" + domId, "class": "field_" + domClass});
    setAttributes(label, {"id": "label_" + domId, "class": "label_" + domClass, "for": "input_" + domId});
    setAttributes(input, {"id": "input_" + domId, "class": "input_" + domClass, "type": inputType});

    label.textContent = labelText;

    field.appendChild(label);
    field.appendChild(input);

    return field;
}

// Set multiple attributes of an element by passing an object of attributes
function setAttributes(element, attributes) {
    for(var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function addLeadingZero(input) {
    if(input.value >= 0 && input.value < 10) {
        input.value = "0" + input.value.toString();
    }
    // Prevent more than 2 digits (manual input)
    if(input.value.toString().length > 2) {
        input.value = input.value.toString().substr(-2, 2);
    }
}

formSetup();