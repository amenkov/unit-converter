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

const elemetsList = [lengthEl, volumeEl, massEl]

function convert() {

    const inputData = inputEl.value

    if(!inputData || !(Number(inputData))) {
        return
    }

    const feets = (Number(inputData) * 3.281).toFixed(3)
    const meters = (Number(inputData) / 3.281).toFixed(3)

    const gallons = (Number(inputData) * 0.264).toFixed(3)
    const liters = (Number(inputData) / 0.264).toFixed(3)

    const pounds = (Number(inputData) * 2.204).toFixed(3)
    const kilos = (Number(inputData) / 2.204).toFixed(3)

    lengthEl.textContent = `${inputData} meters = ${feets} feet | ${inputData} feet = ${meters} meters`
    volumeEl.textContent = `${inputData} liters = ${gallons} gallons | ${inputData} gallons = ${liters} liters`
    massEl.textContent = `${inputData} kilos = ${pounds} pounds | ${inputData} pounds = ${kilos} kilos`

}

convertBtn.addEventListener("click", function() {
    convert()
})