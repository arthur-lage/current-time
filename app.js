let hoursText = document.getElementById("hours")
let minutesText = document.getElementById("minutes")
let secondsText = document.getElementById("seconds")

function UpdateHour(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    seconds = seconds < 10 ? '0' + seconds : seconds
    minutes = minutes < 10 ? '0' + minutes : minutes

    hoursText.innerHTML = hours
    minutesText.innerHTML = minutes
    secondsText.innerHTML = seconds
}

setInterval(UpdateHour, 1000)