// javascript

// let display = document.getElementById("display")
let result1 = document.getElementById("result1")

function calc(){        
    let num = document.getElementById("inputArea").value
    
    let metersToFeet = (num * 3.281).toFixed(3)
    let feetToMeters = (num * 0.305).toFixed(3)
    let litersToGallons = (num * 0.264).toFixed(3)
    let gallonsToLiters = (num * 3.785).toFixed(3)
    let kilogramsToPounds = (num * 2.205).toFixed(3)
    let poundsToKilograms = (num * 0.454).toFixed(3)
    
    result1.textContent = num + " meters = " + metersToFeet + " feet | " + num + " feet = " + feetToMeters + " meters"
    
    result2.textContent = num + " liters = " + litersToGallons + " gallons | " + num + " gallons = " + gallonsToLiters + " liters"
    
    result3.textContent = num + " kilograms = " + kilogramsToPounds + " pounds | " + num + " pounds = " + poundsToKilograms + " kilograms"
}
