// get a reference to the sms or call radio buttons
var checkedRadioBtn = document.querySelector(".billItemTypeRadio");

//get a reference to the add button
var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");

var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");

//create a variable that will keep track of the total bill
var callsTotalRadio = 0;
var smsTotalRadio = 0;
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


function textBillTotal(){
    // get the value entered in the billType textfieldvar checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}

    // update the correct total
    if (billItemType  === "call"){
        callsTotalRadio += 2.75
    }
    else if (billItemType  === "sms"){
        smsTotalRadio += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalTwoElem.innerHTML = callsTotalRadio.toFixed(2);
    smsTotalTwoElem.innerHTML = smsTotalRadio.toFixed(2);
    var totalCostRadio = callsTotalRadio + smsTotalRadio;
    totalTwoElem.innerHTML = totalCostRadio.toFixed(2);

//color the total based on the criteria
if (totalCostRadio >= 50){
    // adding the danger class will make the text red
    totalTwoElem.classList.add("danger");
}
else if (totalCostRadio >= 30){
    totalTwoElem.classList.add("warning");
}
}


radioBillAddBtnElem.addEventListener('click', textBillTotal);


