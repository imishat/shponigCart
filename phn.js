function phnTotalNumberPrice(isIncrease) {
    const phnNumberfiled = document.getElementById('phn-number-field')
    const phnNumberString = phnNumberfiled.value;
    const phnOldNumber = parseInt(phnNumberString)
    let phnNewNumber;
    if (isIncrease === true) {
        phnNewNumber = phnOldNumber + 1;
    } else {
        phnNewNumber = phnOldNumber - 1;

    }
    phnNumberfiled.value = phnNewNumber;
    return phnNewNumber;
}

function phntotalPrice(phnNewNumber) {
    const totalPrice = phnNewNumber * 1219;
    const phntotalPriceElement = document.getElementById('phn-total')
    phntotalPriceElement.innerText = totalPrice;

}




document.getElementById('btn-phn-plus').addEventListener('click', function() {
    const phnNewNumber = phnTotalNumberPrice(true)
    phntotalPrice(phnNewNumber);

})
document.getElementById('btn-phn-minus').addEventListener('click', function() {
    const phnNewNumber = phnTotalNumberPrice(false)
    phntotalPrice(phnNewNumber);
})