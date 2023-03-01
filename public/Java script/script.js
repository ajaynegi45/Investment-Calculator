
// make function to calculate

  function calculate() {
    // Get the input values from the DOM
    const moneyPerYear = document.getElementById("moneyPerYear").value;
    const dividendYield = document.getElementById("dividendYield").value;
      
    // Calculate the required investment using the formula
    const moneyToInvest = moneyPerYear * (100 / dividendYield);
  
    // Get the DOM elements for displaying the result
    const resultLabel = document.getElementById("result-label");
    const result = document.getElementById("result");

    // Get the DOM elements for displaying the result
    var input1 = document.getElementById('moneyPerYear'); 
    var input2 = document.getElementById('dividendYield');
  
    // Update the result label and value with the calculated values
    if (!isNaN(moneyToInvest)) {

      input1.style.border = '1px solid #4CAF50';
      input2.style.border = '1px solid #4CAF50';
      resultLabel.style.color = 'black';
      resultLabel.style.fontSize = '20px';
      resultLabel.textContent = `You need to invest: ₹${moneyToInvest.toLocaleString()} `;
      result.textContent = `to earn ₹${moneyPerYear.toLocaleString()} per year at a ${dividendYield}% dividend yield.`;
    } else {
      resultLabel.textContent = `Please enter a valid number`;
      resultLabel.style.color = 'red';
      result.textContent = "";
      input1.style.border = '2px solid red';
      input2.style.border = '2px solid red';
    }
  }

