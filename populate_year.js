// this is used to populate the drop down box so it is not hardcoded in html using select options

var select = document.getElementById("year-birth1");
for (var i = 2023; i >= 1913; i--) {
  var el = document.createElement("option");
  el.textContent = i;
  el.value = i;
  select.appendChild(el);
}
