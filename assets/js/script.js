// Current date
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// Save button click event
var saveBtn = $(".saveBtn")
var scheduleInput = $(".description");
saveBtn.on("click", function() {
    localStorage.setItem("scheduleInput", scheduleInput.val());
});

// Change colour based off time of the day
var currentHour = moment().hour();

// Testing currentHour variable
console.log(currentHour);