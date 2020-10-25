let NowMoment = moment();

let eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('[Today is] dddd [the] Do [of] MMMM-YYYY');
