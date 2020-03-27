/*
    Danielle Smith
    script.js -- Adds functionality to index.html
*/


const hours = ["12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM", "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"];

function Day(day_name, day_type){
    this.day_name = day_name;
    this.day_type = day_type;
};





const days = [new Day("Monday", "weekday"), new Day("Tuesday", "weekday"), new Day("Wednesday", "weekday"), new Day("Thursday", "weekday"), new Day("Friday", "weekday"), new Day("Saturday", "weekend"), new Day("Sunday", "weekend")];

console.log(days);


for(let i = 0; i < days.length; i++){
    $("#days").append(build_html_string(days[i]));
}


//Helper function to build ugly html string to insert into index.html
function build_html_string(day){
    result = '<div class = "tile"><div class = "tile is-parent ' + day["day_name"] + " " + day["day_type"] + ' day"><div class = "content"><p class = "title">' + day["day_name"] + '</p><div class = "tile is-ancestor"><div class = "tile"><div class = tile is-vertical is-24"><div class = "tile is-parent is-vertical">';
    for(let i = 0; i < 24; i++){
        result += '<div id ' + hours[i] + ' class = "tile is-child hour">' + hours[i] + '<nav class = "level"><div class = "level-left"><div class = "level-item"><form><input type = "text" id = ' + i + ' name = "appointment"> </div></div><div class = "level-right"><div class = "level-item"><p class = "button"> Save </p></div></div></nav></form></div>';
    }
    const end_string = '</div></div></div></div></div></div></div></div></div>';
    return result += end_string;
}




