const table = document.getElementById("itsTable");

let count = 1;
for (let i = 0; i < 10; i++) {
    let row = table.insertRow(table.rows.length);
    for (let j = 0; j < 10; j++) {
        row.insertCell(j).textContent = count;
        count++;
    }
}
