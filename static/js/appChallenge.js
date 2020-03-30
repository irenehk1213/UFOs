// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {};

  // Save the element, value, and id of the filter that was changed
    // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
function updateFilters() {
  console.log("in function")
  datetime = d3.select("#datetime").property("value");
  city = d3.select("#city").property("value");
  state = d3.select("#state").property("value");
  country = d3.select("#country").property("value");
  shape = d3.select("#shape").property("value");

  let grabelement = d3.select(this);
  let filterid = grabelement.attr("id");
  let filtervalues = grabelement.property("value");

  console.log(filterid);
  console.log(filtervalues);

  if (filtervalues) {
    console.log(filters);
    filters[filterid] = filtervalues;
    console.log(filters);
  }
  else{
    delete filters[filterid];
  }
  console.log(filters);

  // Call function to apply all filters and rebuild the table
  filterTable2();
}


function filterTable2() {
  // Set the filteredData to the tableData
let filteredData = tableData ;
  // Loop through all of the filters and keep any data that
  // matches the filter values
Object.entries(filters).forEach(function([key, value]) {
  filteredData = filteredData.filter(row => row[key] == value);  
  });


  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("input").on("change", updateFilters);
//d3.select("input").on("change", filterTable);

//Clear button to refresh or reset the page
let clear = d3.select("#clear-btn");
clear.on("click", function() {
  location.reload();
});

// Build the table when the page loads
buildTable(tableData);

