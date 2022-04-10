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

var timeBlock = $(".time-block")

timeBlock.each(function() {
    var hourBlock = parseInt($(this).attr("id"));

    if (hourBlock < currentHour) {
        console.log("Before");
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
        
    } else if (hourBlock == currentHour) {
        console.log("During");
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");

    } else if (hourBlock > currentHour) {
        console.log("After");
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
})