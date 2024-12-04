function setClock() {
    const now = new Date();

    // Second hand
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;

    // Minute hand
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    document.querySelector('.minute-hand').style.transform = `rotate(${minutesDegrees}deg)`;

    // Hour hand
    const hours = now.getHours();
    const hoursDegrees = ((hours % 12) / 12) * 360 + 90 + (minutes / 60) * 30;
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;
}

// Call the setClock function every second
setInterval(setClock, 1000);
setClock(); // Run immediately to avoid delay
