// JavaScript Document
"use strict"

function updateTime(){

let now = new Date();
let hours = now.getHours();
	if(hours<10){
		hours = "0" + hours;
	}

	else{	
	hours = "" + hours;
	}
	
let minutes = now.getMinutes();
	let minutesToSt;
	if (minutes<10){
		minutesToSt = `0${minutes}`;
	}
	else{
		minutesToSt = minutes.toString();
	} 
	
let seconds = now.getSeconds();
let secondsToSt;
	if(seconds<10){
		secondsToSt = `0${seconds}`;
		}
	else{
		secondsToSt = seconds.toString();
	}

let currentTime = hours + ":" + minutesToSt + ":" + secondsToSt;

let myClock = document.getElementById('clock');
myClock.innerHTML = currentTime;
}

function toggleClock(){
	let myClockDiv = document.getElementById('clock');
	let displaySetting = myClockDiv.style.display;
	let myClockButton = document.getElementById('clockButton');
	
	if(displaySetting == 'block'){
		myClockDiv.style.display = 'none';
		myClockButton.innerHTML = 'Show Clock';
	}
	else{
		myClockDiv.style.display = 'block';
		myClockButton.innerHTML = 'Hide Clock';
	}
}