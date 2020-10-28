$(document).ready(function() {

//DISPLAY TIME AT TOP OF PAGE
let NowMoment = moment();
let eDisplayMoment = document.getElementById('currentDay');
let eDisplayYear = document.getElementById('currentYear');

eDisplayMoment.innerHTML = NowMoment.format('[Today is <br>] dddd [the] Do');
eDisplayYear.innerHTML = NowMoment.format('MMMM YYYY');

let $nineEl = $("#nine");
let $tenEl = $("#ten");
let $elevenEl = $("#eleven");
let $twelveEl = $("#twelve");
let $oneEl = $("#one");
let $twoEl = $("#two");
let $threeEl = $("#three");
let $fourEl = $("#four");
let $fiveEl = $("#five");



//CREATE FUNCTION TO DETERMINE TIME OF DAY
let hour = parseInt(moment().format('HH'));

    $("textarea").each(function () {
        let time = parseInt($(this).attr("name"));

        //IF STATEMENT FOR IF TIME IS IN PAST, TURN DIFFERENT COLOR
        if (time < hour) {
            $(this).addClass("past");
        }
        //IF STATEMENT FOR FUTURE TIME, TIME BLOCK IS DIFFERENT COLOR
        if (time > hour) {
            $(this).addClass("future");
        }
        //IF STATEMENT FOR CURRENT TIME, TIME BLOCK IS DIFFERENT COLOR
        if (time === hour) {
            $(this).addClass("present");
        }
    })
 
//ADD FUNCTION FOR WHEN SAVE BUTTON IS CLICKED, INPUT IN TEXT AREA SAVES
//LOOK INTO IF THIS CAN BE CONDENSED
$("#9").on("click", function() {
    localStorage.setItem("nine", (($nineEl.val())));
})
$("#10").on("click", function() {
    localStorage.setItem("ten", (($tenEl.val())));
})
$("#11").on("click", function() {
    localStorage.setItem("eleven", (($elevenEl.val())));
})
$("#12").on("click", function() {
    localStorage.setItem("twelve", (($twelveEl.val())));
})
$("#13").on("click", function() {
    localStorage.setItem("one", (($oneEl.val())));
})
$("#14").on("click", function() {
    localStorage.setItem("two", (($twoEl.val())));
})
$("#15").on("click", function() {
    localStorage.setItem("three", (($threeEl.val())));
})
$("#16").on("click", function() {
    localStorage.setItem("four", (($fourEl.val())));
})
$("#17").on("click", function() {
    localStorage.setItem("five", (($fiveEl.val())));

}) 

//IF PAGE IS REFRESHED, INPUT STAYS ON PAGE
$("#nine").append(localStorage.getItem("nine"));
$("#ten").append(localStorage.getItem("ten"));
$("#eleven").append(localStorage.getItem("eleven"));
$("#twelve").append(localStorage.getItem("twelve"));
$("#one").append(localStorage.getItem("one"));
$("#two").append(localStorage.getItem("two"));
$("#three").append(localStorage.getItem("three"));
$("#four").append(localStorage.getItem("four"));
$("#five").append(localStorage.getItem("five"));
})

// IF ERASE BUTTON IS CLICKED, CLEAR LINE & STORAGE
$("#9c").on("click", function() {
    $("#nine").val("");
    localStorage.removeItem("nine");
})
$("#10c").on("click", function() {
    $("#ten").val("");
    localStorage.removeItem("ten");
})
$("#11c").on("click", function() {
    $("#eleven").val("");
    localStorage.removeItem("eleven");
})
$("#12c").on("click", function() {
    $("#twelve").val("");
    localStorage.removeItem("twelve");
})
$("#13c").on("click", function() {
    $("#one").val("");
    localStorage.removeItem("one");
})
$("#14c").on("click", function() {
    $("#two").val("");
    localStorage.removeItem("two");
})
$("#15c").on("click", function() {
    $("#three").val("");
    localStorage.removeItem("three");
})
$("#16c").on("click", function() {
    $("#four").val("");
    localStorage.removeItem("four");
})
$("#17c").on("click", function() {
    $("#five").val("");
    localStorage.removeItem("five");
})