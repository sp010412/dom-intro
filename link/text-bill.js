// get a reference to the textbox where the bill type is to be entered
var billTypeTextElement = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtnElement = document.querySelector(".addToBillBtn");

var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;

//add an event listener for when the add button is pressed
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var textInsta= textBillTotal1()

function textBillTotal(){
    var billTypeEntered = billTypeTextElement.value.trim();
    // get the value entered in the billType textfield
textInsta.textBillTotal2(billTypeEntered)
    
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = textInsta.totalCalls().toFixed(2);
    smsTotalElem.innerHTML = textInsta.totalSms().toFixed(2);
    totalCostElem.innerHTML = textInsta.total().toFixed(2);


    
//color the total based on the criteria
    // adding the danger class will make the text red
    totalCostElem.classList.add(textInsta.color());

}


addToBillBtnElement.addEventListener('click', textBillTotal);


