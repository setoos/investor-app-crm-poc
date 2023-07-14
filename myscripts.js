function buildTable(data) {
  var table = document.getElementById("mytable");
  var tr;
  for (var i = 0; i < data.length; i++) {
    tr = "<tr>";
    table.innerHTML += tr
      .concat("<td>" + data[i].investment_name + "</td>")
      .concat("<td>" + data[i].industry + "</td>")
      .concat("<td>" + data[i].business_type + "</td>")
      .concat("<td>" + data[i].business_model + "</td>")
      .concat("<td>" + data[i].email + "</td>")
      .concat("<td>" + data[i].location + "</td>")
      .concat("<td>" + data[i].established + "</td>")
      .concat("</tr>");
  }
}

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://my-json-server.typicode.com/trushantb/Investors-json-server/results" + window.location.search);

xhr.responseType = "json";

xhr.send();

xhr.onload = function () {
  var data = this.response;
  if (xhr.status >= 200 && xhr.status < 400) {
    buildTable(data);
  } else {
    console.log("error");
  }
};