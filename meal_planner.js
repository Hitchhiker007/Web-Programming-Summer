// this is used to populate the drop down box so it is not hardcoded in html using select options

var select = document.getElementById("#calories");
var options = ["1000", "1200", "1400", "1600", "1800", "2000", "2200", "2400","2600","2800","3000"];

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

var select = document.getElementById("#meals");
var options = ["1", "2", "3", "4", "5","6", "7", "8", "9", "10"];

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}



