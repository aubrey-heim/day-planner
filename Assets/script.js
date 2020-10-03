let dayTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
let hour = moment().format("H");
let hourBlocks = [$("#9"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")]

$("#currentDay").text(dayTime)

hourBlocks.forEach(element => checkHour(element))
    
function checkHour(element){
    console.log(element.attr("id"))
    var hourBlock = parseInt(element.attr("id"))
    if (hourBlock<hour){
        element.addClass("past")
    } else if (hourBlock>hour){
        element.addClass("future")
    }else if (hourBlock=hour){
        element.addClass("present")
    }
}
        
    