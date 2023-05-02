window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const dateDisplay = document.querySelector('.date');
const toggleSwitch = document.querySelector('#toggle');
const digitalClock = document.querySelector('.digital-clock');

let isDigitalClockEnabled = false;

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;

    if (seconds === 0) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = '';
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const date = now.toLocaleDateString('en-US', options);
    dateDisplay.textContent = date;
    
    if (isDigitalClockEnabled) {
        const hourValue = hours < 10 ? `0${hours}` : hours;
        const minuteValue = minutes < 10 ? `0${minutes}` : minutes;
        const secondValue = seconds < 10 ? `0${seconds}` : seconds;
        digitalClock.style.display = 'block';
        digitalClock.innerHTML = `${hourValue}:${minuteValue}:${secondValue}`;
    } else {
        digitalClock.style.display = 'none';
    }
}

toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
        isDigitalClockEnabled = true;
        digitalClock.style.display = 'block';
        document.querySelector('.clock').style.display = 'none';
        document.querySelectorAll('.hand').forEach(hand => hand.style.display = 'none');
        } else {
        isDigitalClockEnabled = false;
        digitalClock.style.display = 'none';
        document.querySelector('.clock').style.display = 'block';
        document.querySelectorAll('.hand').forEach(hand => hand.style.display = 'block');
        }
});
setInterval(setDate, 1000);
