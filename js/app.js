var introData = [
  {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
  {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
  {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
  {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
  {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
  {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
  {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

// where to put the pre-existing tasks
var ul = $('.task-items');

// going through each part of the JSON for the key:value object
$.each(introData, function(i, elem) {
    ul.append('<li>' + '<span>' + elem.name + '&nbsp;' + '</span>' + '<span>' +  elem.date + '</span>' + '<span>' + elem.assigned + '</span>' + '</li>');
});

// access the form
var form = $('#to-do-wrapper');

// when the form submits, prevent default reload and handle all the below functions
form.submit(function(e) {
  e.preventDefault();
  
  // getting the values of the task, date, and assigned to inputs
  var newTask = $('input[name=task]').val();
  var newDate = $('input[name=date]').val();
  var newAssignedTo = $('input[name=assigned]').val();
  $('.task-items').prepend('<li>' + '<span>' + newTask + '&nbsp;' + '</span>' + '<span>' + newDate + '</span>' + '<span>' + newAssignedTo + '</span>' + '</li>');
  
  // clear input entries after successful submission
  $('input[name=task]').val('');
  $('input[name=date]').val('');
  $('input[name=assigned]').val('');
});

// let's tie the onclick to the header within the form
  // to allow the use of submit without reloading the page 
var submit_form_btn = $('#create-task-header');
  
// when the submit button is clicked
submit_form_btn.click(function() {
  // validate the HTML5 form, if success
  if (form.checkValidity()) {
    form.submit();
  }
  else {
    form.$('input[type="submit"]').click();
  }
});