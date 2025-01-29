function searchFlights() {
    const from = document.getElementById('inputFrom').value;
    const to = document.getElementById('inputTo').value;
    const depart = document.getElementById('inputDepart').value;
    const returnDate = document.getElementById('inputReturn').value;
    const travellers = document.getElementById('inputTravellers').value;

    // Redirect to payment page with query parameters
    window.location.href = `payment.html?from=${from}&to=${to}&depart=${depart}&return=${returnDate}&travellers=${travellers}`;
}