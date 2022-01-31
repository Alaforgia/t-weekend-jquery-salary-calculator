$(document).ready(readyNow);

let count = 0;
let employees = [];

function readyNow() {
  console.log("is working");
  $("#submit-button").on("click", function () {
    clickSubmit();
    addRow(employees[employees.length - 1]);
    $(".delete-" + count).on("click", function () {
      let rowId = this.getAttribute("class");
      console.log("type", typeof rowId);
      console.log("Anything I want");
      deleteRow(rowId.substring(7));
    });
    count++;
  });
}

function clickSubmit() {
  let employee = {
    firstName: $("#input-first-name").val(),
    lastName: $("#input-second-name").val(),
    idNum: $("#input-id").val(),
    title: $("#input-title").val(),
    salary: $("#input-salary").val(),
  };
  $("#input-first-name").val("");
  $("#input-second-name").val("");
  $("#input-id").val("");
  $("#input-title").val("");
  $("#input-salary").val("");
  employees.push(employee);
}
function addRow(employee) {
  let tableRow = $("<tr></tr>");
  tableRow.addClass("table-row-" + count);
  let firstNameTD = $("<td></td>");
  let lastNameTD = $("<td></td>");
  let idTD = $("<td></td>");
  let titleTD = $("<td></td>");
  let salaryTD = $("<td></td>");
  let deleteTD = $("<td></td>");
  let deleteButton = $("<button></button>");
  deleteButton.addClass("delete-" + count);

  deleteButton.text("Delete");
  deleteTD.append(deleteButton);

  firstNameTD.text(employee.firstName);
  lastNameTD.text(employee.lastName);
  idTD.text(employee.idNum);
  titleTD.text(employee.title);
  salaryTD.text(employee.salary);

  tableRow.append(firstNameTD, lastNameTD, idTD, titleTD, salaryTD, deleteTD);
  $(".table-data").append(tableRow);
}
function deleteRow(rowID) {
  $(`.table-row-${rowID}`).remove();
}

{
  /* <tr class="employ-data">
<td id="employ-first-name"></td>
<td id="employ-last-name"></td>
<td id="employ-num"></td>
<td id="employ-title"></td>
<td id="employ-salary"></td>
</tr> */
}
if ($("#input-salary").on(clickSubmit()) > 20000) {
  $(".table-data").css({ "background-color": "red" });
}
