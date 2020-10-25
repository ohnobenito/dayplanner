
//DISPLAY TIME AT TOP OF PAGE
let NowMoment = moment();
let eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('[Today is] dddd [the] Do [of] MMMM YYYY');

// ADD FUNCTION TO DISPLAY TIME OF DAY IN EACH TIMEBLOCK DIV
let nowHour = moment();
let eDisplayTime = document.getElementsByClassName("hour col-3");
eDisplayTime.document.createElement("h2");
eDisplayTime.innerHTML = nowHour.format('YYYY');

//CREATE FUNCTION TO DETERMINE TIME OF DAY

    //IF STATEMENT FOR CURRENT TIME, TIME BLOCK IS GREEN

    //IF STATEMENT FOR FUTURE TIME, TIME BLOCK IS LIGHTER

//ADD FUNCTION FOR WHEN SAVE BUTTON IS CLICKED, INPUT IN TEXT AREA SAVES

//IF PAGE IS REFRESHED, INPUT STAYS ON PAGE