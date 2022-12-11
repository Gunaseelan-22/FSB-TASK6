const body = document.querySelector('body')
const timer = document.createElement('p')
timer.className='timer'
body.appendChild(timer)

var startTime = null;
var endTime = null;

function changeTimer() {
  if (startTime === null) {
    startTime = Date.now();
    endTime = startTime + 11000;
    requestAnimationFrame(changeTimer);
    return;
  }
  let nValue = Date.now();
  let tValue = (nValue < endTime) ? endTime - nValue : 0;
  let mtValue = tValue / 1000;
  console.log('mtVal ==>',mtValue);
  let mtiValue = parseInt(mtValue);
  console.log('mtival ==>', mtiValue);
  if (mtiValue < 1) {
    timer.innerText = "Happy Programmer's Day";
    return;
  }
  timer.innerText = mtiValue;
  requestAnimationFrame(changeTimer);
  return;
}
changeTimer();