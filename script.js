function updateClock() {
  const now = new Date();

  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = second * 6; // 360deg / 60s
  const minuteDeg = minute * 6 + second * 0.1; // 360deg / 60min + smooth movement
  const hourDeg = (hour % 12) * 30 + minute * 0.5; // 360deg / 12h + smooth movement

  document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
}

// Initial call and then every second
setInterval(updateClock, 1000);
updateClock();
