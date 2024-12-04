function setClock() {
    const now = new Date();

    // Seconds
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90; // 90 accounts for default rotation
    document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;

    // Minutes
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    document.querySelector('.minute-hand').style.transform = `rotate(${minutesDegrees}deg)`;

    // Hours
    const hours = now.getHours();
    const hoursDegrees = ((hours % 12) / 12) * 360 + 90 + (minutes / 60) * 30;
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setClock, 1000);
setClock(); // Call it once immediately
