function updateClock() {
  const now = new Date();

  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = second * 6; // 360 / 60
  const minuteDeg = minute * 6 + second * 0.1;
  const hourDeg = (hour % 12) * 30 + minute * 0.5;

  document.querySelector('.sec-hand').style.transform = `rotate(${secondDeg}deg)`;
  document.querySelector('.min-hand').style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
