function calculate(principal, rate, years) {
    // FIX: The rate percentage must be converted to a decimal
    const interest = principal * (rate / 100) * years; 
    const total = principal + interest;
    return total; // Return the number for easier testing
}

function update() {
    const p = parseFloat(document.getElementById('principal').value);
    const r = parseFloat(document.getElementById('rate').value);
    const y = parseFloat(document.getElementById('years').value);

    const result = calculate(p, r, y);
    // Format the output here, not in the logic function
    document.getElementById('total').innerText = '$' + result.toFixed(2);
}