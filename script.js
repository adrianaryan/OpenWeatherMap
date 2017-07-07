const seattleURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=47.6762&lon=-122.3182&units=imperial&APPID=c0fff48255974fe650f9128b85c18529"
const londonURL = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=0.1278&APPID=c0fff48255974fe650f9128b85c18529&units=imperial"


window.onload = function() {
	console.log("Is it Working?")
}



// Get the Seattle Weather

function getSeattleWeather() {
	document.getElementById("showWeather").innerHTML = ""
	console.log("Seattle is clicked!")
// create the inner HTML "Today in ~"
	let h4 = document.createElement("h4")
	h4.innerHTML = "Today in Seattle:"
	document.getElementById("showWeather").appendChild(h4)


  let request = new XMLHttpRequest()
	request.open("GET", seattleURL, true)
	request.onload = onLoadFunc
	request.onerror = onerrorFunc
  //send
	request.send()
}

//get the London's Weather
function getLondonWeather() {
	document.getElementById("showWeather").innerHTML = ""
	console.log("clicked on London")
	let h4 = document.createElement("h4")
	h4.innerHTML = "Today in London:"
	document.getElementById("showWeather").appendChild(h4)
	let request = new XMLHttpRequest()
	request.open("GET", londonURL, true)
	request.onload = onLoadFunc
	request.onerror = onerrorFunc
	request.send()
}

function onLoadFunc() {
	const resp = JSON.parse(this.response)
	console.log("Respond")
	printListItem("Conditions: " + resp.weather[0].main)
	printListItem("Current Temperature: " + resp.main.temp + " °F")
	printListItem("Max Temperature Today: " + resp.main.temp_max + " °F")
	printListItem("Min Temperature Today: " + resp.main.temp_min + " °F")
}

function onerrorFunc() {
	console.log("ERORRRRRRR")
}

function printListItem(message) {
	let p = document.createElement("p")
	p.innerHTML = message
	document.getElementById("showWeather").appendChild(p)
}
