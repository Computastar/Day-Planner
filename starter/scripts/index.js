
// Add current Day time to header

var today = dayjs();
$("#currentDay").text(today.format('dddd, D MMMM  YYYY'));

// Add timeBlock - use day.js library much easier than moment.js - Im all about the easiness

function timeBlock() {   
    $(".time-block").each(function(){
        // Get the hour from the planner and set to plannerHour var;
        var plannerHour = parseInt($(this).attr("id").split("hour-")[1]);
       
        // Logging out for sanity;
        console.log("Planner : " + plannerHour);

        // Set plannerHour var to Date obj;
        plannerHour = new Date(plannerHour);

        // Use dayjs Lib to get the currentHour, set to var;
        var currentHour = dayjs().hour();
        
        // Logging out for sanity;
        console.log("Current : " + currentHour);

        // Set currentHour to Date obj;
        currentHour = new Date(currentHour);

        // Set both currentHour and plannerHour to Dayjs obj(comparison wont work unless set to dayjs obj);
        currentHour = dayjs(currentHour);
        plannerHour = dayjs(plannerHour);

        // Logging out dayjs comparison for sanity;
        console.log("IsBefore : "  + plannerHour.isBefore(plannerHour, 'hour'));
        console.log("IsAfter : "  + plannerHour.isAfter(plannerHour, 'hour'));
  
        // Use dayjs to test for same hour;
        if (plannerHour.isSame(currentHour)){
          console.log("timeblock is present")
          $(this).addClass("present");
          $(this).removeClass("past");
          $(this).removeClass("future");      
        }
        // Use dayjs to test for before hour;
        if (plannerHour.isBefore(currentHour)){
          console.log("timeblock is past")
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future");      
        }
        // Use dayjs to test for after after;
        if (plannerHour.isAfter(currentHour)){
          console.log("timeblock is future")
          $(this).addClass("future");
          $(this).removeClass("past");
          $(this).removeClass("present");
        }

        // Retrieve hour item from local storage and return to element;
        $("#hour-9 .description").val(localStorage.getItem("hour-9"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    
    })}


// Save the time block;
$(".saveBtn").click(function(){
    var hour = $(this).parent().attr("id");
    var hourlyTask = $(this).siblings(".description").val();
    console.log(hour + " " + hourlyTask);
    localStorage.setItem(hour,hourlyTask);

})

// Call function;
timeBlock();