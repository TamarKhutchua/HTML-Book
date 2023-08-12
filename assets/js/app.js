document.getElementsByTagName("h1")[0].onmouseover = function () {
  this.innerText = "Active Heading";
  this.style.color = "red";
};
function showkey(e) {
  if (e.keyCode === 89 || e.keyCode === 121) {
    alert("Y pressed. Thank you");
  }
}
document.onkeydown = showkey;

function toggle() {
  const chart = document.getElementById("chart");
  let hid = chart.style.visibility !== "visible";
  chart.style.visibility = hid ? "visible" : "hidden";
  chart.style.height = hid ? "auto" : "0px";
}
function playAudio() {
  const snd = document.getElementById("snd");
  const ctl = document.getElementById("ctl");
  const bar = document.getElementById("bar");
  const num = document.getElementById("num");
  let run = true;
  ctl.onclick = function () {
    run ? snd.onplay() : snd.onpause();
    run = !run;
  };
  snd.ontimeupdate = function () {
    bar.value = snd.currentTime / snd.duration;
    num.innerHTML = Math.floor(100 * bar.value) + "%";
  };
}

function addStar(hotel) {
  const temp = document.getElementById("star");
  const copy = temp.contentEditable.cloneNode(true);
  hotel.appendChild(copy);
}
function removeStars(hotel) {
  const hotel = document.getElementById("hotel");
  while (hotel.ChildElementCount > 0) {
    hotel.removeChild(hotel.lastChild);
  }
}

function addEventListener() {
  const dlog = document.getElementById("dlog");
  const info = document.getElementById("info");
  const show = document.getElementById("show");
  const cncl = document.getElementById("cncl");
  const conf = document.getElementById("conf");
  show.addEventListener("click", function () {
    dlog.showModal();
    info.innerText = "Modal Dialog Open";
  });
  cncl.addEventListener("click", function () {
    dlog.close();
    info.innerText = "Modal Dialog Canceled";
  });
  conf.addEventListener("click", function () {
    dlog.close();
    info.innerText = "Modal Dialog Confirmed";
  });
}

function getContext() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.lineWidth = 2;
  ctx.font = "5em Fantasy";
}

function multiply(q, p) {
  let result = parseFloat(q.value) * parseFloat(p.value);
  if (isNaN(result) || result < 1) return "";
  else return "Total: $" + result.toFixed(2);
}

function click() {
  const pep = document.getElementById("pepperoni");
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    pep.checked = true;
  });
}
