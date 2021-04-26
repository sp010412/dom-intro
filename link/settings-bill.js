// get a reference to the sms or call radio buttons
var checkedRadioBtn = document.querySelector(".billItemTypeWithSettings");

// get references to all the settings fields
var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");

//get references to all the total fields
var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");

var settingInst=  settingsFunction()


//get a reference to the add button
var billItemTypeRadioLastElem = document.querySelector(".billItemTypeRadioLast");

//get a reference to the 'Update settings' button
var updateSettingsElem = document.querySelector(".updateSettings");



// create a variables that will keep track of all the settings
var callCostSet = 0;
var smsCostSet = 0;

var warningLevel = 0;
var criticalLevel = 0;

// create a variables that will keep track of all three totals.
var callsTotalDo = 0;
var smsTotalDo = 0;
var totalCostSet = 0;

//add an event listener for when the 'Update settings' button is pressed
updateSettingsElem.addEventListener('click', settingsFunction);

//add an event listener for when the add button is pressed
billItemTypeRadioLastElem.addEventListener('click', addButtonOne);


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.


function addButtonOne() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        if (totalCostSet < criticalLevel ) {
            if (checkedRadioBtn) {

            var billItemType = checkedRadioBtn.value
           // alert(totalCostSet)

            // alert(billItemType)
            if (billItemType === "call") {
                // alert(callCost)
                callsTotalDo += callCostSet;
            }
            else if (billItemType === "sms") {
                smsTotalDo += smsCostSet;
            }
        }
    }

    // alert()
    //update the totals that is displayed on the screen.
    callTotalSettingsElem.innerHTML = callsTotalDo.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotalDo.toFixed(2);
    totalCostSet = callsTotalDo + smsTotalDo;
    totalSettingsElem.innerHTML = totalCostSet.toFixed(2);
colorAdd();
}

function settingsFunction() {
    callCostSet = Number(callCostSettingElem.value);
    smsCostSet = Number(smsCostSettingElem.value);
    warningLevel = Number(warningLevelSettingElem.value);
    criticalLevel = Number(criticalLevelSettingElem.value);
    // alert(callCost)
colorAdd();
    //update the totals that is displayed on the screen.
    // callCostSettingElem.innerHTML = callCost.toFixed(2);
    // smsCostSettingElem.innerHTML = smsCost.toFixed(2);
    // warningLevelsettingElem.innerHTML = warningLevel.toFixed(2);
    // criticalLevelSettingElem.innerHTML = criticalLevel.toFixed(2);
}
function colorAdd() {
//color the total based on the criteria
if (totalCostSet >= warningLevel) {
    // adding the danger class will make the text red
    totalSettingsElem.classList.add("warning");
    totalSettingsElem.classList.remove("danger");
}
if (totalCostSet >= criticalLevel) {
    totalSettingsElem.classList.remove("warning");
    totalSettingsElem.classList.add("danger");
}
if (totalCostSet < warningLevel) {
    totalSettingsElem.classList.remove("warning");
}
if (totalCostSet < criticalLevel) {
    totalSettingsElem.classList.remove("danger");
}
}
