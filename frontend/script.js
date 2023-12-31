// Replace this URL with your actual API endpoint

// #3498db - A soft blue
// #3498db - A vibrant green
// #e74c3c - A bold red
// #f39c12 - A warm orange
// #9b59b6 - A rich purple
// #2c3e50 - A dark grayish blue
var color=['#3498db','#3498db','#e74c3c','#2ecc71','#9b59b6','#ff9800']

const apiUrl = 'http://127.0.0.1:8000/timetable/';
let p = fetch(apiUrl)
p.then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(value);
    for (let i = 0; i < value.length; i++) {
        let subj_code = value[i].code;
        let schedule = value[i].schedule;
        var invalidGroup = ["P2","P3","mc312"];
        // if(subj_code.index(validGroup)==-1)continue;
        var shouldRunAction = invalidGroup.every(substring => subj_code.indexOf(substring) === -1);
        if(!shouldRunAction)continue;
        var obj = null;
        var color_pick = Math.random()*100;
        console.log(color_pick)
        for (let index = 0; index < schedule.length; index++) {
            let week = schedule[index].week;
            let start = schedule[index].startTime;
            // console.log('.'+String(week)+'-'+String(start).substring(0,2));
            obj = document.getElementsByClassName(String(start).substring(0,2)+'-'+String(week));
            // console.log(String(start).substring(0,2)+'-'+String(week))
            if(obj!=null){
                // console.log(obj)
                obj[0].style.backgroundColor = color[Math.floor(color_pick%6)];
                obj[0].textContent=subj_code+"\n"+value[i].course;
            }
        }
        
    }

})