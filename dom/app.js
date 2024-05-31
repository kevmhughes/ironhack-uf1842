// declaration of query selectors
const billAmountInput = document.querySelector("#bill-amount");
const PercentageTipInput = document.querySelector("#percentage-tip");
const tipAmountField = document.querySelector("#tip-amount");
const totalField = document.querySelector("#total");
const calculateBtn = document.querySelector("#calculate");

// on click event listener
calculateBtn.addEventListener("click", () => {
  let billAmount = billAmountInput.value;
  let PercentageTip = PercentageTipInput.value;
  calculateTipAmount(billAmount, PercentageTip);
});

// calculates the tip amount based on the percentage of the bill amount
function calculateTipAmount(num1, num2) {
  let tipAmount = (num1 / 100) * num2;
  tipAmountField.value = tipAmount.toFixed(2);
  calculateTotal(tipAmount);
}

// calculates the total which consists of the bill amount plus the tip amount
function calculateTotal(num) {
  let total = num + Number(billAmountInput.value);
  totalField.value = total.toFixed(2);
}
