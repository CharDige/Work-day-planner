// Current date
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// Save button click event
var saveBtn = $(".saveBtn")
var scheduleInput = $(".description");
saveBtn.on("click", function() {
    localStorage.setItem("scheduleInput", scheduleInput.val());
});