let day = "   friday   ";

day = day.trim()
let day1 = day.charAt(0).toLocaleUpperCase()
day = day1 + day.substring(1)

switch(day) {
    case"Friday": 
    case"Sunday": 
    case"Sunday": 
    console.log("No Appointments Available")
    break
    case"Monday": 
    case"Thursday": 
    console.log("From 10:00 AM To 5:00 PM")
    break
    case "Tuesday": 
    console.log("From 10:00 AM To 6:00 PM")
    break
    case "Wednesday": 
    console.log("From 10:00 AM To 7:00 PM")
    break
     default:
    console.log("Its Not A Valid Day")
}