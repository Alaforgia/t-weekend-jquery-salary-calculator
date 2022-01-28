$(document).ready(readyNow);

function readyNow() {
  console.log("is working");
  clickSubmit();
  $("#submit-button").on("click", clickSubmit);
}

function clickSubmit() {
  //   let firstName = $("#input-first-name").submit("");
  console.log("works");
  //   let addFirstName = $("#input-first-name").val();

  $("#input-first-name").append($("#employ-first-name").val());
}
