/*
    Danielle Smith
    script.js -- Adds functionality to index.html

*/




function Day(day_name, day_type){
    this.day_name = day_name;
    this.day_type = day_type;
};


const days = [new Day("Monday", "weekday"), new Day("Tuesday", "weekday"), new Day("Wednesday", "weekday"), new Day("Thursday", "weekday"), new Day("Friday", "weekday"), new Day("Saturday", "weekend"), new Day("Sunday", "weekend")];

console.log(days);


for(let i = 0; i < days.length; i++){
    $("#days").append('<div class = "tile"><div class = "tile is-parent ' + days[i]["day_name"] + " " + days[i]["day_type"] + ' day"><div class = "content"><p class = "title">' + days[i]["day_name"] + '</p></div></div></div>');
}