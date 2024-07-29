function correctData(date) {
    return date < 10 ? "0" + date : date;
  }

function saleData() {
    let now = new Date();
    let saleDate = new Date(2024, 5, 29);
    let finish = saleDate - now;
  
    let days = Math.floor(finish / (24 * 60 * 60 * 1000));
    let hours = Math.floor((finish % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minutes = Math.floor((finish % (60 * 60 * 1000)) / (60 * 1000)); 
  
    let timerValue = document.querySelectorAll(".timerBlock .value");
    if (timerValue.length >= 4) {
      timerValue[0].innerHTML = correctData(days);
      timerValue[1].innerHTML = correctData(hours);
      timerValue[2].innerHTML = correctData(minutes);
      timerValue[3].innerHTML = correctData(days);
      timerValue[4].innerHTML = correctData(hours);
      timerValue[5].innerHTML = correctData(minutes);
      console.log(days, hours, minutes);
    }
  }
  
  saleData();
  setInterval(() => {
    saleData();
  }, 1000);
  


