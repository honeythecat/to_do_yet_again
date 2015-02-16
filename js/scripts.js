$(document).ready(function() {
  $("form#tasks").submit(function(event) {
    event.preventDefault();

    var newTask = $("input#new-task").val();

    $("ul#task-list").append("<li><span class='task'>" + newTask + "</span></li>");


  });
});
