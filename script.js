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

get_from_storage();
//Helper function to build ugly html string to insert into index.html
function build_html_string(day){
    result = '<div class = "tile"><div class = "tile is-parent ' + day["day_name"] + " " + day["day_type"] + ' day"><div class = "content"><p class = "title">' + day["day_name"] + '</p><div class = "tile is-ancestor"><div class = "tile"><div class = tile is-vertical is-24"><div class = "tile is-parent is-vertical">';
    for(let i = 0; i < 24; i++){
        result += '<div id ' + hours[i] + ' class = "tile is-child hour">' + hours[i] + '<nav class = "level"><div class = "level-left"><div class = "level-item"><form><input type = "text" id = "' + day["day_name"] + i + '" name = "appointment"> </div></div><div class = "level-right"><div class = "level-item"><p id = "' + i + '" class = "button ' + day["day_name"] + '"> Save </p></div></div></nav></form></div>';
    }
    const end_string = '</div></div></div></div></div></div></div></div></div>';
    return result += end_string;
}



$(".button").on("click", function() {
    const day = $(this).attr("class").split(" ")[1], hour = this.id; 
    localStorage.setItem(day + hour, [day, hour, $("#" + day + hour).val()]);

//    console.log(localStorage.content);
});


$("#clear_all").on("click", function(){
    if(confirm("Are you sure you want to clear your schedule? This cannot be undone.")){
        clear_all_appointments();
    }

});


function get_from_storage(){
    for(let i = 0; i < days.length; i++){
        for(let j = 0; j < hours.length; j++){
            const data = localStorage.getItem(days[i]["day_name"] + j);
            if(data){
                console.log(data.split(","));
                const tokens = data.split(",");
                $("#" + days[i]["day_name"] + j).val(tokens[2]);
            }
        }
    }
}


function clear_all_appointments(){
    for(let i = 0; i < days.length; i++){
        for(let j = 0; j < hours.length; j++){
            const data = localStorage.getItem(days[i]["day_name"] + j);
            if(data){
                $("#" + days[i]["day_name"] + j).val("");
                localStorage.removeItem(days[i]["day_name"] + j);
            }
        }
    }
}


// function clear_appointments(Day){

// }