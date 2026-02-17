/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

const localStorageKey = "unit-converter"

const initialUnitState = {
    unit: 20
}

const fixedLimit = 3

let initialValue = JSON.parse(localStorage.getItem(localStorageKey))

if (initialValue) {
    initialValue = initialValue.unit
    inputEl.value = initialValue
    convert(initialValue)
}

function convert(value) {

    if (!value || !(Number(value))) {
        return
    }

    const feets = (Number(value) * 3.281).toFixed(fixedLimit)
    const meters = (Number(value) / 3.281).toFixed(fixedLimit)

    const gallons = (Number(value) * 0.264).toFixed(fixedLimit)
    const liters = (Number(value) / 0.264).toFixed(fixedLimit)

    const pounds = (Number(value) * 2.204).toFixed(fixedLimit)
    const kilos = (Number(value) / 2.204).toFixed(fixedLimit)

    lengthEl.textContent = `${value} meters = ${feets} feet | ${value} feet = ${meters} meters`
    volumeEl.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`
    massEl.textContent = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`

    saveState(value)

}

convertBtn.addEventListener("click", function () {
    convert(inputEl.value)
})

function saveState(value) {
    initialUnitState.unit = value
    localStorage.setItem(localStorageKey, JSON.stringify(initialUnitState))
}