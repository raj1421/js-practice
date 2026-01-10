const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate-btn');
const result = document.getElementById('result');
calculateBtn.addEventListener('click', function() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100;
    const bmi = weight / (height * height);
    if(height <= 0 || heightInput.value === '' ) {
        result.textContent = "Please enter a valid height.";
    } 
    else if(weight <= 0 || weightInput.value === '' ) {
        result.textContent = "Please enter a valid weight.";
    }
    else {
        result.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    }
    if(bmi < 18.5) {
        result.textContent += " (Underweight)";
    }
    else if(bmi >= 18.5 && bmi <= 24.9) {
        result.textContent += " (Normal weight)";
    }
    else if(bmi >= 25 && bmi <= 29.9) {
        result.textContent += " (Overweight)";
    }
    else {
        result.textContent += " (Obese)";
    }
});