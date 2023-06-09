var ratePerUnit = -1;
var grandTotal = 0;

function calculateTotalDue() {
    // set ratePerUnit
    rateSpan = document.getElementById("rate-per-unit");
    ratePerUnit = rateSpan.textContent;

    // calculate all lineitems
    var lineItems = document.getElementsByClassName("units"); // https://www.thewebdeveloperguide.com/javascript-get-element-by-class/
    for (let i = 0; i < lineItems.length; i++) {
        calculateSubTotal(lineItems[i]);
    }

    // print grand total
    var totalDue = document.getElementById("total-due");
    totalDue.textContent = "$" + grandTotal;
}

function calculateSubTotal(lineItem) {
    // calculate values for this line
    var units = lineItem.textContent;
    var subTotal = units * ratePerUnit;
    grandTotal += subTotal;
    console.log("Running total after " + units + " units: " + grandTotal);

    // add subTotal first so the rate will go between it and the lineItem
    var subTotalText = document.createElement("span");
    subTotalText.textContent = "$" + subTotal;
    lineItem.parentNode.insertBefore(subTotalText, lineItem.nextSibling); // https://www.w3docs.com/snippets/javascript/how-to-insert-an-element-after-another-element-in-javascript.html

    // add the rate
    var rate = document.createElement("span");
    rate.textContent = "$" + ratePerUnit;
    lineItem.parentNode.insertBefore(rate, lineItem.nextSibling);
}

window.onload = calculateTotalDue;
//document.addEventListener("DOMContentLoaded", calculateUnits); // https://stackoverflow.com/questions/2414750/difference-between-domcontentloaded-and-load-events
