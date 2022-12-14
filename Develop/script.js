// challenge #5 pseudocode

//use moment to add current date in header (Day of week, MM DD)
//insert table using bootstrap
//8 rows (9am - 5pm)
//3 columns (1,10,1)(time, events, lock)
//use 3 colors for the rows to indicate if the time is current (red), past(gray), or future(green)
    //text "current hour" should populate the current hour
    //will use moment js for this
// will need a save (lock) button in the right of each row
    //use local storage to save the event so that it remains after the page is refreshed
// must be able to click into each timeblock to add text
// page should scroll
//if/else stmt to pull the time from moment and determine the color
//each row should be (past,present,future)

//if time is within current hour, make the box red.
//if time is before current hour, make the box gray.
//if time is after current hour, make the box green.
//using array- check each time block against "lastHour" 
//then apply background color.

//set array including each event Block


//Add current date in header using moment.js
var today = moment().format("dddd, MMM Do");
$("#currentDay").text(today);


//set variables
var eventBlock = document.getElementsByClassName('hour');
var textArea = document.getElementsByClassName('textArea');

var lastHour = moment().hours();
// console.log("The last hour was " + lastHour);

if (lastHour = moment().hours()) {
// console.log(lastHour)
}
//convert each time block to 24 hr time
for (var i = 0; i < eventBlock.length; i++) { 
    const dt = moment(eventBlock[i].innerHTML, ["h A"]).format("HH");
    // console.log(dt);

    // console.log("I am in time block " + eventBlock[i].innerHTML + ".");

    //set background colors
    if (lastHour === dt) {
        // console.log("lastHour is equal to eventBlock-- needs a red background");
        textArea[i].classList.add("present");
    } else if (lastHour > dt) {
        // console.log("lastHour is greater than eventBlock-- needs a gray background");
        textArea[i].classList.add("past");
    } else if (lastHour < dt) {
        // console.log("lastHour is less than eventBlock-- needs a green background");
        textArea[i].classList.add("future");
    }
}

//use jquery to set up localstorage 

$(".saveBtn").on("click",updateEvent);

//function to set items
function updateEvent(event) {
    event.preventDefault();

    var savedEvents = []

$(".textArea").each(function(){
    savedEvents.push($(this).val());
    // console.log(savedEvents);
    localStorage.setItem("save", JSON.stringify(savedEvents));
})
}

//function to get items
function pullEvents() {
    savedEvents = JSON.parse(localStorage.getItem("save"));
    // console.log(savedEvents);
    var count = 0
    $(".textArea").each(function(){
        $(this).text(savedEvents[count]);
        count++;
    })
}
//call function
pullEvents();