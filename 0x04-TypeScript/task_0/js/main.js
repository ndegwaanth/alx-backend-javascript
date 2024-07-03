// main.ts
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};
var studentsList = [student1, student2];
// Function to render table
function renderTable(students) {
    var table = document.createElement("table");
    var tableHead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    var headers = ["First Name", "Location"];
    headers.forEach(function (headerText) {
        var header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);
    var tableBody = document.createElement("tbody");
    students.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
}
document.addEventListener("DOMContentLoaded", function () { return renderTable(studentsList); });
