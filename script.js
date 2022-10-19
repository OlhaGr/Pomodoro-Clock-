var start = document.getElementById('start');
var reset = document.getElementById('reset')
var stop = document.getElementById('stop')
var wm = document.getElementById('w-min')
var ws = document.getElementById('w-sec')
var bm = document.getElementById('b-min')
var bs = document.getElementById('b-sec')

var startTime;
start.addEventListener('click', function () {
   if (startTime === undefined) {
      startTime = setInterval(timer, 1000)
   } else {
      alert('timer is alredy run');
   }
})
function timer() {
   if (ws.innerText != 0) {
      ws.innerText--;
   } else if (wm.innerText != 0 && ws.innerText == 0) {
      ws.innerText = 59;
      wm.innerText--;
   }
   if (wm.innerText == 0 && ws.innerText == 0) {
      if (bs.innerText != 0) {
         bs.innerText--;
      } else if (bm.innerText != 0 && bs.innerText == 0) {
         bs.innerText = 59;
         bm.innerText--;
      }
   }
    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText==0 && bs.innerText == 0) {
   wm.innerText = 59;
   ws.innerText = 00;
   bm.innerText = 05;
   bs.innerText = 00;
 }
 }
  

reset.addEventListener('click', function() {
   wm.innerText = 25;
   ws.innerText = 00;
   bm.innerText = 05;
   bs.innerText = 00;

   document.getElementById('counter').innerText = 0;
   stopInterval()
   startTime = undefined;
})
 stop.addEventListener('click', function () {
   stopInterval()
   startTime = undefined;
})

function stopInterval() {
   clearInterval(startTime);
}
document.body.style.backgroundColor = "blue";
