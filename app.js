// choose country, which iran by default
let country = 'iran'

function getData() {
    fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
    .then(response => response.json())
    .then(data => htmlSetter(data))
    .catch(err => console.log(err))
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
const chosenCountry = document.querySelector('.chosen-country')

// data number elt
const statsNumber = document.querySelector('.stats-number')

// after clicking srch btn, looks for data of typed country
searchBtn.addEventListener('click', function(){
    country = searchBar.value.toLowerCase()
    getData()
})

// search by enter key button
searchBar.addEventListener("keyup", function(event) {
    // number 13 is the enter key on the keyboard
    if (event.keyCode === 13) {
      // does searchBtn click action by clicking enter btn
    searchBtn.click();
    }
}); 

function htmlSetter(data) {
    // sets name of the country in the title
    chosenCountry.textContent = data.country

    // sets suitable value for different items
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