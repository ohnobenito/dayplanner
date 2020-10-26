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
$(".saveBtn").on("click", function() {
    localStorage.setItem("nine", (($nineEl.val())));
    localStorage.setItem("ten", (($tenEl.val())));
    localStorage.setItem("eleven", (($elevenEl.val())));
    localStorage.setItem("twelve", (($twelveEl.val())));
    localStorage.setItem("one", (($oneEl.val())));
    localStorage.setItem("two", (($twoEl.val())));
    localStorage.setItem("three", (($threeEl.val())));
    localStorage.setItem("four", (($fourEl.val())));
    localStorage.setItem("five", (($fiveEl.val())));
})

//IF PAGE IS REFRESHED, INPUT STAYS ON PAGE
// LOOK INTO IF THIS CAN BE CONDENSED
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