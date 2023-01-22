
// Add current Day time to header

var today = dayjs();
$("#currentDay").text(today.format('dddd, D MMMM  YYYY'));

// Add timeBlock - use day.js library much easier than moment.js - Im all about the easiness

function timeBlock() {   
    $(".time-block").each(function(){
        var currentHour = parseInt($(this).attr("id").split("hour-")[1]);

        console.log(currentHour);
  
        if (currentHour === dayjs().hour()){
          console.log("timeblock is present")
          $(this).addClass("present");
          $(this).removeClass("past");
          $(this).removeClass("future");      
        }
        if (currentHour < dayjs().hour()){
          console.log("timeblock is past")
          $(this).addClass("past");
          $(this).removeClass("present");
          $(this).removeClass("future");      
        }
        if (currentHour > dayjs().hour()){
          console.log("timeblock is future")
          $(this).addClass("future");
          $(this).removeClass("past");
          $(this).removeClass("present");
        }

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


// Save the time block

$(".saveBtn").click(function(){
    var hour = $(this).parent().attr("id");
    var hourlyTask = $(this).siblings(".description").val();
    console.log(hour + " " + hourlyTask)
    localStorage.setItem(hour,hourlyTask);

})

timeBlock();