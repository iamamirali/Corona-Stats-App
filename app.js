// choose country, which defaultly is iran
let country = 'iran'

function getData() {
    fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
    .then(response => response.json())
    .then(data => htmlSetter(data))
}
getData()

// stats items
const activeCases = document.querySelector('.active-cases')
const criticalCases = document.querySelector('.critical-cases')
const recoveredCases = document.querySelector('.recovered-cases')
const totalCases = document.querySelector('.total-cases')
const totalDeaths = document.querySelector('.total-deaths')
const totalTests = document.querySelector('.total-tests')

// search section items
const searchBar = document.getElementById('search-bar')
const searchBtn = document.getElementById('search-btn')
// set searchBar value initially to empty string
searchBar.value = ''

// chosen country title value
const countryTitle = 'Iran'

// data number elt
const statsNumber = document.querySelector('.stats-number')

searchBtn.addEventListener('click', function(){
    country = searchBar.value.toLowerCase()
    getData()
})

// sets suitable value for different items
function htmlSetter(data) {
    itemValueSetter(activeCases,data.todayCases)
    itemValueSetter(criticalCases,data.critical)
    itemValueSetter(recoveredCases,data.todayRecovered)
    itemValueSetter(totalCases,data.cases)
    itemValueSetter(totalDeaths,data.todayDeaths)
    itemValueSetter(totalTests,data.tests)
}

// gets data, creates p element and put the specified value to specified container
function itemValueSetter(item,data) {
        item.children[2].textContent = data
}