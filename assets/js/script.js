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
    var hourBlock = $(this).attr("id");

    if (hourBlock < currentHour) {
        console.log("Before");
        timeBlock.addClass("past");
        timeBlock.removeClass("present");
        timeBlock.removeClass("future");
        
    } else if (hourBlock == currentHour) {
        console.log("During");
        timeBlock.addClass("present");
        timeBlock.removeClass("past");
        timeBlock.removeClass("future");

    } else if (hourBlock > currentHour) {
        console.log("After");
        timeBlock.addClass("future");
        timeBlock.removeClass("past");
        timeBlock.removeClass("present");
    }
})

