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
     var cal = document.getElementById("calculate");

    // Check if input fields are empty
    if(!isNaN(moneyToInvest)){
      input1.style.border = '1px solid #4CAF50';
      input2.style.border = '1px solid #4CAF50';
      resultLabel.style.color = 'black';
      resultLabel.style.fontSize = '20px';
      resultLabel.textContent = `You need to invest: ₹${moneyToInvest.toLocaleString()} `;
      result.textContent = `to earn ₹${moneyPerYear.toLocaleString()} per year at a ${dividendYield}% dividend yield.`;
    }
    else {

      // Add the shake animation to the input fields and calculate button

      // Money per year input field
      input1.style.border = '2px solid red';
      input1.style.animation = 'shakeX';
      input1.style.animationDuration = '0.5s';

      // Dividend Yield input field
      input2.style.border = '2px solid red';
      input2.style.animation = 'shakeX';
      input2.style.animationDuration = '0.5s';

      // Calculate button
      cal.style.animation = 'shakeX';
      cal.style.animationDuration = '0.5s';
    
      // Empty field Message
      resultLabel.textContent = `Please enter a valid number`;
      resultLabel.style.color = 'red';
      result.textContent = "";
    
    }
  }
  
  

// Scroll Revealing Effect
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: true
});

sr.reveal('.switch, .title',{delay: 200}); 
sr.reveal('.money, #moneyPerYear, .dividend, #dividendYield, #calculate,.vikas, #result',{interval: 200});
sr.reveal('.a_tag ',{ interval: 200});
sr.reveal('.title_info, .h2_title, .h2_title2',{ interval: 300});
sr.reveal('p, li',{ origin: 'left',interval: 400}); 
