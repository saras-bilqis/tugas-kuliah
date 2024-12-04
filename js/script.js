function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90; // Offset by 90 degrees
    document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    document.querySelector('.minute-hand').style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours % 12) / 12) * 360 + 90 + (minutes / 60) * 30; // Adjust for partial hour
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;
}

// Initialize the clock and update every second
setInterval(setClock, 1000);
setClock();
