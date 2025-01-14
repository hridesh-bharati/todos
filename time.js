const time = () => {
  const newDate = new Date();
  const hrs = newDate.getHours();
  const minut = newDate.getMinutes();
  const second = newDate.getSeconds();
  document.getElementById("time").innerHTML = `${hrs} : ${minut} : ${second}`;
};
setInterval(time, 1000);
