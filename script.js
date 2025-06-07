function updateClock() {
  // Use a fixed time: 3:30:00
  const hour = 3;
  const minute = 30;
  const second = 0;

  const secondDeg = second * 6; // 0°
  const minuteDeg = minute * 6; // 180°
  const hourDeg = (hour % 12) * 30 + minute * 0.5; // 105°

  document.querySelector('.sec-hand').style.transform = `rotate(${secondDeg}deg)`;
  document.querySelector('.min-hand').style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
}

updateClock(); // run immediately, no interval
