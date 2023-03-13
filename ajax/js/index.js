function callApi(url) {
    return new Promise((resolve) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            resolve(this.responseText)
        }
        xhttp.open("GET", url, true);
        xhttp.send();
    })
}
let url = "https://api.covid19api.com/total/country/vietnam"

//Handle with DOM
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const dataConfirmed = $('.alert.alert-dark p')
const dataDeaths = $('.alert.alert-danger p')
const dataRecover = $('.alert.alert-success p')
const dataActive = $('.alert.alert-warning p')
const dataInfor = $('.jumbotron.text-center p')

function getData(data) {
    dataConfirmed.innerText = data.Confirmed
    dataDeaths.innerText = data.Deaths
    dataRecover.innerText = data.Recovered
    dataActive.innerText = data.Active
    dataInfor.innerHTML = `Informations about COVID-19 at ${data.Date}`
}
callApi(url)
    .then((dataText) => {
        const data = JSON.parse(dataText)
        const lastDayData = data[data.length - 1]

        // Update 1 time every 5 minutes
        dataConfirmed.innerText = 'Loading...'
        dataDeaths.innerText = 'Loading...'
        dataRecover.innerText = 'Loading...'
        dataActive.innerText = 'Loading...'
        dataInfor.innerHTML = `Informations about COVID-19 at ...`
        setInterval(() => {
            getData(lastDayData)
        }, 5000)

    })