// import the data from data.js
const tableData = data; 

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
      // Loop through each field in the dataRow 
      Object.values(dataRow).forEach((val) => {
      // and append each value as a table cell (td)
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  