function updateNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field')
    const caseNumberString = caseNumberField.value;
    const priviousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = priviousCaseNumber + 1;
    } else {
        newCaseNumber = priviousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function castTotalNumberPrice(newCaseNumber) {

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalPriceElement = document.getElementById('case-total')
    const caseTotalElement = document.getElementById('case-total')
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function() {

    const newCaseNumber = updateNumber(true);
    castTotalNumberPrice(newCaseNumber);

})
document.getElementById('btn-case-minus').addEventListener('click', function() {

    const newCaseNumber = updateNumber(false)

    castTotalNumberPrice(newCaseNumber);

})