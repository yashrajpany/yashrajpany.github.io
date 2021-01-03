document.getElementById('loan-form').addEventListener("submit", calculateResults);

function calculateResults(e){
    console.log("Calculating...");
// UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) /100 /12 ;
    const calculatePayment =  parseFloat(years.value) *12;

    // // Calculate Result
    const x = Math.pow(1 + calculateInterest, calculatePayment);
    const monthly = (principle * x * calculateInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayment).toFixed(2);
        totalInterest.value = ((monthly * calculatePayment) - principle).toFixed(2);
    } else {
    showError('Please check your number');
    }


    e.preventDefault();
}

function showError(error){
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className =  'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    card.insertBefore(errorDiv, heading);
    setTimeout(remError, 3000);
}

function remError(){
    document.querySelector('.alert').remove();
}
