// get a reference to the sms or call radio buttons
var checkedRadioBtn = document.querySelector(".billItemTypeWithSettings");

// get references to all the settings fields
var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");
var warningLevelsettingElem = document.querySelector(".warningLevelsetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

//get references to all the total fields
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");

//get a reference to the add button
var billItemTypeRadioLastElem = document.querySelector(".billItemTypeRadioLast");

//get a reference to the 'Update settings' button
var updateSettingsElem = document.querySelector(".updateSettings");



// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;

var warningLevel = 0;
var criticalLevel = 0;

// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;


//add an event listener for when the 'Update settings' button is pressed
updateSettingsElem.addEventListener('click', addButtonTwo);

//add an event listener for when the add button is pressed
billItemTypeRadioLastElem.addEventListener('click', addButtonOne);


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.


function addButtonOne() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }

    if (billItemType === "call") {
        callsTotal += callCostSettingElem.value;
    }
    else if (billItemType === "sms") {
        smsTotal += smsCostSettingElem.value;
    }
    //update the totals that is displayed on the screen.
    callTotalSettingsElem.innerHTML = callsTotal.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalSettingsElem.innerHTML = totalCost.toFixed(2);

    //color the total based on the criteria
    if (totalCost >= warningLevelsettingElem.value) {
        // adding the danger class will make the text red
        totalSettingsElem.classList.add("warning");
    }
    else if (totalCost >= criticalLevelSettingElem.value) {
        totalSettingsElem.classList.add("danger");
    }
}

function addButtonTwo() {
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
    }

    if (billItemType === "call") {
        callsCost += callCostSettingElem.value;
    }
    else if (billItemType === "sms") {
        smsCost += smsCostSettingElem.value;
    }
    //update the totals that is displayed on the screen.
    callCostSettingElem.innerHTML = callCost.toFixed(2);
    smsCostSettingElem .innerHTML = smsCost.toFixed(2);
    warningLevelsettingElem.innerHTML = warningLevel.toFixed(2);
    criticalLevelSettingElem.innerHTML = criticalLevel.toFixed(2);
}
