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
