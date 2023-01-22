
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
    
    })}


// Save the time block

$(".saveBtn").click(function(){
    var hour = $(this).parent().attr("id");
    var hourlyTask = $(this).siblings(".description").val();
    console.log(hour + " " + hourlyTask)
    localStorage.setItem(hour,hourlyTask);

})

timeBlock();