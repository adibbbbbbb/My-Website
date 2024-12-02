<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zakat Calculator</title>
</head>
<body>

<h1>Deductions</h1>
<hr/>

<label for="amount_debts">Debts</label>
<input id="amount_debts" step="any" type="number" onchange="calculate()">

<label for="amount_expenses">Expenses</label>
<input id="amount_expenses" step="any" type="number" onchange="calculate()">

<h1>Totals</h1>
<hr/>

<label for="amount_eligible">Amount Eligible For Zakat</label>
<input id="amount_eligible" type="text" readonly>

<label for="amount_zakat">Your Zakat Total (2.5% of Eligible Amount)</label>
<input id="amount_zakat" type="text" readonly>

<button id="donate_button" type="button" style="padding: 12px 35px; font-size: 18px; margin: 10px auto; background-color: #f3a800; color: #fff; border: none; cursor: pointer;">Donate Now</button>

<script>
    function getValue(id) {
        return parseFloat(document.getElementById(id).value) || 0; // Return 0 if value is NaN or empty
    }

    function calculate() {
        const amt_nisab = 5301; 
        const amt_debts = getValue("amount_debts");
        const amt_expenses = getValue("amount_expenses");

        // Example of fixed amounts for assets (replace or adapt as needed)
        const amt_assets_gross = 0; // Set amounts for assets as needed

        const amt_assets_net = amt_assets_gross - amt_debts - amt_expenses; 
        let amt_eligible = (amt_assets_net > amt_nisab) ? Math.ceil(amt_assets_net) : 0;
        let amt_zakat = Math.ceil(amt_eligible * 0.025);

        document.getElementById("amount_eligible").value = amt_eligible;
        document.getElementById("amount_zakat").value = amt_zakat;

        const donateButton = document.getElementById("donate_button");
        if (amt_zakat > 0) {
            donateButton.innerText = 'Donate ' + amt_zakat;
            donateButton.dataset.amount = amt_zakat;
        } else {
            donateButton.innerText = 'Donate Now';
            donateButton.dataset.amount = 50; // Default donation amount
        }
    }

    // Add the click event to the donate button
    document.getElementById("donate_button").addEventListener("click", function() {
        calculate();
    });
</script>

</body>
</html>