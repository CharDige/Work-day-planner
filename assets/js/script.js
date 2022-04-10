// Current date through moment.js
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// Save button variables
var saveButtonNineAm = $("#save-button-9am");
var saveButtonTenAm = $("#save-button-10am");
var saveButtonElevenAm = $("#save-button-11am");
var saveButtonTwelvePm = $("#save-button-12pm");
var saveButtonOnePm = $("#save-button-1pm");
var saveButtonTwoPm = $("#save-button-2pm");
var saveButtonThreePm = $("#save-button-3pm");
var saveButtonFourPm = $("#save-button-4pm");
var saveButtonFivePm = $("#save-button-5pm");

// Text area variables for storage
var nineAmInput = $("#9am-input");
var tenAmInput = $("#10am-input");
var elevenAmInput = $("#11am-input");
var twelvePmInput = $("#12pm-input");
var onePmInput = $("#1pm-input");
var twoPmInput = $("#2pm-input");
var threePmInput = $("#3pm-input");
var fourPmInput = $("#4pm-input");
var fivePmInput = $("#5pm-input");

// Get items from local storage when page is refreshed
nineAmInput.text(localStorage.getItem("nineAmInput"));

tenAmInput.text(localStorage.getItem("tenAmInput"));

elevenAmInput.text(localStorage.getItem("elevenAmInput"));

twelvePmInput.text(localStorage.getItem("twelvePmInput"));

onePmInput.text(localStorage.getItem("onePmInput"));

twoPmInput.text(localStorage.getItem("twoPmInput"));

threePmInput.text(localStorage.getItem("threePmInput"));

fourPmInput.text(localStorage.getItem("fourPmInput"));

fivePmInput.text(localStorage.getItem("fivePmInput"));


// Save button click events to set items into localStorage
saveButtonNineAm.on("click", function() {
    localStorage.setItem("nineAmInput", nineAmInput.val());
});

saveButtonTenAm.on("click", function() {
    localStorage.setItem("tenAmInput", tenAmInput.val());
});

saveButtonElevenAm.on("click", function() {
    localStorage.setItem("elevenAmInput", elevenAmInput.val());
});

saveButtonTwelvePm.on("click", function() {
    localStorage.setItem("twelvePmInput", twelvePmInput.val());
});

saveButtonOnePm.on("click", function() {
    localStorage.setItem("onePmInput", onePmInput.val());
});

saveButtonTwoPm.on("click", function() {
    localStorage.setItem("twoPmInput", twoPmInput.val());
});

saveButtonThreePm.on("click", function() {
    localStorage.setItem("threePmInput", threePmInput.val());
});

saveButtonFourPm.on("click", function() {
    localStorage.setItem("fourPmInput", fourPmInput.val());
});

saveButtonFivePm.on("click", function() {
    localStorage.setItem("fivePmInput", fivePmInput.val());
});


// Set current hour variable to link to moment.js
var currentHour = moment().hour();

// Set variable for each element with a time-block class
var timeBlock = $(".time-block")

// Iterate through ids within each timeBlock 
timeBlock.each(function() {
    var hourBlock = parseInt($(this).attr("id"));

    // Change class to show hours that have passed
    if (hourBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    
    // Change class to show hour that is current     
    } else if (hourBlock === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");

    // Change class to show hours that are in the future    
    } else if (hourBlock > currentHour) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
})