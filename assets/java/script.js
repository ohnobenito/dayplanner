$(document).ready(function() {
//DISPLAY TIME AT TOP OF PAGE
let NowMoment = moment();
let eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('[Today is <br>] dddd [the] Do [of] MMMM YYYY');


//CREATE FUNCTION TO DETERMINE TIME OF DAY
let hour = parseInt(moment().format('HH'));
console.log(hour);

    $("textarea").each(function () {
        let time = parseInt($(this).attr("name"));

        //IF STATEMENT FOR IF TIME IS IN PAST, TURN GREY
        if (time < hour) {
            $(this).addClass("past");
        }
        //IF STATEMENT FOR FUTURE TIME, TIME BLOCK IS LIGHTER
        if (time > hour) {
            $(this).addClass("future");
        }
        //IF STATEMENT FOR CURRENT TIME, TIME BLOCK IS GREEN
        if (time === hour) {
            $(this).addClass("present");
        }
    })
    

//ADD FUNCTION FOR WHEN SAVE BUTTON IS CLICKED, INPUT IN TEXT AREA SAVES

//IF PAGE IS REFRESHED, INPUT STAYS ON PAGE

/// TEXT AREA; TIME BLOCK; HOUR; SAVE BUTTON
})