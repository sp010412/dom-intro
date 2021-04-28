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




//get a reference to the add button
var billItemTypeRadioLastElem = document.querySelector(".billItemTypeRadioLast");

//get a reference to the 'Update settings' button
var updateSettingsElem = document.querySelector(".updateSettings");



// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

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

var settingInsta = settingsFunction()

function addButtonOne() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");


    var billItemType = checkedRadioBtn.value

settingInsta.makeCall()
settingInsta.sendSms()
// alert()
//update the totals that is displayed on the screen.
callTotalSettingsElem.innerHTML = settingInsta.getTotalCallCost().toFixed(2);
smsTotalSettingsElem.innerHTML = settingInsta.getTotalSmsCost().toFixed(2);

totalSettingsElem.innerHTML = settingInsta.getTotalCost().toFixed(2);

}

function settingsFunction() {
    settingInsta.setCallCost(Number(callCostSettingElem.value));
    settingInsta.setSmsCost(Number(smsCostSettingElem.value)) ;
    settingInsta.setWarningLevel(Number(warningLevelSettingElem.value));
    settingInsta.setCriticalLevel(Number(criticalLevelSettingElem.value));
    

    settingInsta.getCallCost()
    settingInsta.getSmsCost()
    settingInsta.getWarningLevel()
    settingInsta.getCriticalLevel()
    // alert(callCost)
   // colorAdd();
    //update the totals that is displayed on the screen.
    // callCostSettingElem.innerHTML = callCost.toFixed(2);
    // smsCostSettingElem.innerHTML = smsCost.toFixed(2);
    // warningLevelsettingElem.innerHTML = warningLevel.toFixed(2);
    // criticalLevelSettingElem.innerHTML = criticalLevel.toFixed(2);
}
function colorAdd() {

    totalSettingsElem.classList.add(settingInsta.totalClassName());
   totalSettingsElem.classList.remove("danger");
   totalSettingsElem.classList.remove("critical");




    // //color the total based on the criteria
    // if (totalCostSet >= warningLevel) {
    //     // adding the danger class will make the text red
    //     totalSettingsElem.classList.add("warning");
    //     totalSettingsElem.classList.remove("danger");
    // }
    // if (totalCostSet >= criticalLevel) {
    //     totalSettingsElem.classList.remove("warning");
    //     totalSettingsElem.classList.add("danger");
    // }
    // if (totalCostSet < warningLevel) {
    //     totalSettingsElem.classList.remove("warning");
    // }
    // if (totalCostSet < criticalLevel) {
    //     totalSettingsElem.classList.remove("danger");
    // }
}
