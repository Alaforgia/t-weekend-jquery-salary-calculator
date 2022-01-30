$(document).ready(readyNow);

function readyNow() {
  console.log("is working");
  $("#submit-button").on("click", function () {
    clickSubmit();
  });
}

let count = 0;

function clickSubmit() {
  //   let firstName = $("#input-first-name").submit("");
  console.log("works");
  //   let addFirstName = $("#input-first-name").val();
  $("#employ-first-name").text($("#input-first-name").val());
  $("#employ-last-name").text($("#input-second-name").val());
  $("#employ-num").text($("#input-id").val());
  $("#employ-title").text($("#input-title").val());
  $("#employ-salary").text($("#input-salary").val());

  let firstName = $("#input-first-name");
  let lastName = $("#input-second-name");
  let idNum = $("#input-id");
  let title = $("#input-title");
  let salary = $("#input-salary");

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
  count++;

  deleteButton.text("Delete");
  deleteTD.append(deleteButton);

  firstNameTD.text(firstName.val());
  lastNameTD.text(lastName.val());
  idTD.text(idNum.val());
  titleTD.text(title.val());
  salaryTD.text(salary.val());

  tableRow.append(firstNameTD, lastNameTD, idTD, titleTD, salaryTD, deleteTD);
  $(".table-data").append(tableRow);
}
function deleteRow() {}

{
  /* <tr class="employ-data">
<td id="employ-first-name"></td>
<td id="employ-last-name"></td>
<td id="employ-num"></td>
<td id="employ-title"></td>
<td id="employ-salary"></td>
</tr> */
}
