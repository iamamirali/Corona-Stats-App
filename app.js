function getData() {
    fetch('https://corona.lmao.ninja/v2/countries/iran')
    .then(response => response.json())
    .then(data => htmlSetter(data))
}
getData()

const activeCases = document.querySelector('.active-cases')
const criticalCases = document.querySelector('.critical-cases')
const recoveredCases = document.querySelector('.recovered-cases')
const totalCases = document.querySelector('.total-cases')
const totalDeaths = document.querySelector('.total-deaths')
const totalTests = document.querySelector('.total-tests')

// sets suitable value for different items
function htmlSetter(data) {
    itemValueSetter(activeCases,data.active)
    itemValueSetter(criticalCases,data.critical)
    itemValueSetter(recoveredCases,data.recovered)
    itemValueSetter(totalCases,data.cases)
    itemValueSetter(totalDeaths,data.deaths)
    itemValueSetter(totalTests,data.tests)
}

// gets data, creates p element and put the specified value to specified container
function itemValueSetter(item,data) {
    const statsNumber = document.createElement('p')
    statsNumber.textContent = data
    statsNumber.classList.add('stats-number')
    item.appendChild(statsNumber)
}