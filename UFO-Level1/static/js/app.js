// from data.js
var tbody = d3.select("tbody");
var tableData = data;

// YOUR CODE HERE!

//Columns to add filters of:
data.forEach(ufoReport => {
  var row = tableData.append("tr");
  Object.defineProperties(ufoReport).forEach(([Key, value]) => {
    var cell = row.append("td");
    cell.text(value); // <- actually adds the data from the table to the cell
  });
});
//Filter via date
var filterArray = [d => (d.datetime = tableData.getElementById("datetime").value())];
filterArray.forEach(f => (result = tableData.filter(f)));
console.log(date);
