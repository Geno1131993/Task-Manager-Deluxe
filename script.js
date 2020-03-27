/*
    Danielle Smith
    script.js -- Adds functionality to index.html

*/




function Day(day_name, day_type){
    this.day_name = day_name;
    this.day_type = day_type;
};


function Schedule(){

}




const days = [new Day("Monday", "weekday"), new Day("Tuesday", "weekday"), new Day("Wednesday", "weekday"), new Day("Thursday", "weekday"), new Day("Friday", "weekday"), new Day("Saturday", "weekend"), new Day("Sunday", "weekend")];

console.log(days);


for(let i = 0; i < days.length; i++){
    // $("#days").append('<div class = "tile"><div class = "tile is-parent ' + days[i]["day_name"] + " " + days[i]["day_type"] + ' day"><div class = "content"><p class = "title">' + days[i]["day_name"] + '</p></div></div></div>');
    // for(let j = 0; j < 24; j++){
            
    // }
    console.log(days[i]);
    $("#days").append(build_html_string(days[i]));
}



function build_html_string(day){
    result = '<div class = "tile"><div class = "tile is-parent ' + day["day_name"] + " " + day["day_type"] + ' day"><div class = "content"><p class = "title">' + day["day_name"] + '</p><div class = "tile is-ancestor"><div class = "tile"><div class = tile is-vertical is-24"><div class = "tile is-parent is-vertical">';
    

    for(let i = 0; i < 24; i++){
        result += '<div id ' + i + ' class = "tile is-child"> Test </div>';

    }
    
    
    const end_string = '</div></div></div></div></div></div></div></div></div>';
    result += end_string;
    return result;
}


