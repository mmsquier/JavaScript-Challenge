// from data.js
var tbody = d3.select("tbody");

// var tableData = data; //????

//Columns of data that will be added when filtered:
data.forEach(ufoReport => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value); // <- actually adds the data from the table to the cell
  });
});

//Getting a reference to the button on the website:
var button = d3.select("#filter-btn"); //connects to the botton on html
button.on("click", function() {
  //when button clicked do this:
  var inputField = d3.select("#datetime"); //connect input area of html
  var inputValue = inputField.property("value"); //the value in the html
  var filteredData = data.filter(tableData => tableData.datetime === inputValue); //filter the data with the input

  var filter = d3.select("tbody");
  filter.html("");

  filteredData.forEach(ufoReport => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
