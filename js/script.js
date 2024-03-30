var cities = ["Faisalabad","Lahore","Karachi","Islamabad"]


document.getElementById("simpleAlert").onclick = function() {
    alert("This is an simple alert!!!")
}

document.getElementById("printName").onclick = function() {
    document.getElementById("output").innerHTML = "Hafiz Abeer"
}

document.getElementById("printCities").onclick = function(){
    document.getElementById("output").innerHTML = ""
    // let cities = ["Faisalabad","Lahore","Karachi","Islamabad"]
    
    for(let index = 0; index < cities.length; index++){
        document.getElementById("output").innerHTML += index + 1 + ")" + cities[index] + "<br />"
    }
}

function addCity(){
    let city = document.getElementById("inputText").value
    
    if(!city){
        alert("Enter your city name")
        return
    }
    
    cities.push(city)
}

function generateTable(){
    let tableNumber = prompt('Enter the table number:')

    let lengthOfTable = prompt('Enter the length of table:')

    for(let i = 1; i <= lengthOfTable; i++){
        document.getElementById("output").innerHTML += tableNumber + "*" + i + "=" + tableNumber*i + "<br />"
    }
}