fetch('/.netlify/functions/api')
  .then(response => response.json())
  .then(data => {
    const apiUrl = data.apiUrl;

    function checkIfDataIsStale(value) {
      const cachedTimestamp = value;
      if (cachedTimestamp) {
        const currentTime = new Date().getTime();
        const halfHour = 60 * 60 * 1000; // Half hour in milliseconds
        return currentTime - parseInt(cachedTimestamp) > halfHour;
      }
      // If there's no cached timestamp, consider data as stale to fetch a fresh one
      return true;
    }

    function afterForm() {
      const validSubject = [];
      var checkboxes = document.querySelectorAll('#subjects input[type="checkbox"]');
      checkboxes.forEach(function(checkbox){
        if(checkbox.checked){
          validSubject.push(checkbox.id);
        }
      })
      // console.log(validSubject);
      sessionStorage.setItem('validSubjects',JSON.stringify(validSubject));
    }

    // session of valid subject 
    const validSubject = JSON.parse(sessionStorage.getItem('validSubjects'));
    console.log("valid subject ",validSubject);


    var color = [
      "#3498db",
      "#3bbd2d",
      "#e74c3c",
      "#2ecc71",
      "#9b59b6",
      "#ff9800",
      "#1abc9c",
      "#6c12f3",
      "#32870b",
      "#acae27",
      "#8e44ad",
      "#db344d",
    ];


    // session
    const ScheduleData = localStorage.getItem("ScheduleData");
    const isStale = checkIfDataIsStale(ScheduleData);
    //assign api to null
    var api_data = null;

    if (ScheduleData && !isStale) { //work when api_data store in session or local storage so no need to call api unnecessary 
      api_data = JSON.parse(ScheduleData);
      console.log(api_data);
    } else { // if session get old or api_data not found then run this javascript store api then store in session
      let p = fetch(apiUrl);
      p.then((value) => {
        return value.json();
      }).then((value) => {
        // console.log(value);
        api_data = value;
        localStorage.setItem("ScheduleData", JSON.stringify(value));
      });
    }
    // if api data posses something 
    if (api_data != null) {
      let itr = 0; // this is only work on color code of subject so different color getting
      for (let i = 0; i < api_data.length; i++) {
        let subj_code = api_data[i].code;
        let schedule = api_data[i].schedule;

        var shouldRun = validSubject.indexOf(subj_code)!=-1;
        if(!shouldRun)continue;

        var obj = null;
        var color_pick = api_data[i].id;
        color_pick = i + itr;
        var sub_name_code = api_data[i].course
          .split(" ")
          .map((word) => word[0])
          .join("");

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

  });