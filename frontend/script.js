// Replace this URL with your actual API endpoint

function checkIfDataIsStale(value) {
  const cachedTimestamp = value;

  if (cachedTimestamp) {
    const currentTime = new Date().getTime();
    const halfHourInMillis = 60 * 60 * 1000; // Half hour in milliseconds

    return currentTime - parseInt(cachedTimestamp) > halfHourInMillis;
  }

  // If there's no cached timestamp, consider data as stale to fetch a fresh one
  return true;
}

var color = [
  "#3498db",
  "#3bbd2d",
  "#e74c3c",
  "#2ecc71",
  "#9b59b6",
  "#ff9800",
  "#1abc9c",
  "#f39c12",
  "#c0392b",
  "#27ae60",
  "#8e44ad",
  "#3498db",
];

const apiUrl = "http://127.0.0.1:8000/timetable/";

const ScheduleData = localStorage.getItem("ScheduleData");
const isStale = checkIfDataIsStale(ScheduleData);

var api_data = null;
if (ScheduleData && !isStale) {
  api_data = JSON.parse(ScheduleData);
  console.log(api_data);
} else {
  let p = fetch(apiUrl);
  p.then((value) => {
    return value.json();
  }).then((value) => {
    console.log(value);
    api_data = value;
    localStorage.setItem("ScheduleData", JSON.stringify(value));
  });
}
// console.log(api_data)
if (api_data != null) {
  let itr = 0;
  for (let i = 0; i < api_data.length; i++) {
    let subj_code = api_data[i].code;
    let schedule = api_data[i].schedule;
    var invalidGroup = ["P2", "P3", "mc312"];
    // if(subj_code.index(validGroup)==-1)continue;
    var shouldRunAction = invalidGroup.every(
      (substring) => subj_code.indexOf(substring) === -1
    );
    if (!shouldRunAction) continue;
    var obj = null;
    var color_pick = api_data[i].id;
    color_pick = i + itr;
    var sub_name_code = api_data[i].course
      .split(" ")
      .map((word) => word[0])
      .join("");

    // console.log(sub_name_code);
    // console.log(color_pick)
    for (let index = 0; index < schedule.length; index++) {
      let week = schedule[index].week;
      let start = schedule[index].startTime;
      obj = document.getElementsByClassName(
        String(start).substring(0, 2) + "-" + String(week)
      );
      if (obj != null) {
        obj[0].style.backgroundColor = color[Math.floor(color_pick % 12)];
        obj[0].textContent = subj_code.toUpperCase() + "\n" + sub_name_code;
      }
      itr++;
    }
  }
}
