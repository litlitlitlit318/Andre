alert("Hello World!");
alert(2 + 2);
alert(4 * "2");
alert(8 + "2");

$(document).ready(function() {
  // Our code will go here.
});

function test() {
  //All code goes here.
};

$(document).ready(function() {
  alert($("#css-item").text());
});

$("#css-item").text()

$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  });
});
