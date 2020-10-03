//pulling date and time from Moment
let dayTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
//pulling hour from Moment
let hour = moment().format("H");
//creating an array including all of the hour blocks
let hourBlocks = [$("#9"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")]

//pulling saved data from local storage and parsing as array
let savedText = JSON.parse(localStorage.getItem("savedText"));

//if there is saved data, displays this
if (savedText) {
    updateText()
//if no saved data, sets saved text for all of the time blocks to an empty string
} else {
    savedText = ["", "", "", "", "", "", "", "", ""]
}

//sets the text content for the day shown on the planner to the current day
$("#currentDay").text(dayTime)

//runs the checkHour function on each of the hour blocks
hourBlocks.forEach(element => checkHour(element))

//writing checkHour function    
function checkHour(element){
    //grabs the id of the hour block and parses it into an integer
    var hourBlock = parseInt(element.attr("id"))
    //checks if the id of the block is less than the current hour
    if (hourBlock<hour){
        //sets blocks to the past class
        element.addClass("past")
    //checks if the id of the block is more than the current hour
    } else if (hourBlock>hour){
        //sets blocks to the future class
        element.addClass("future")
    //checks if the id of the block is equal to the current hour
    }else if (hourBlock=hour){
        //sets blocks to the present class
        element.addClass("present")
    }
}
//writing updateText function
function updateText (){
    //loops through the 9 hours
    for (let i=0; i<9; i++){
        //selects the each hour block in turn
        let selectedBlock = $(".container").children(0)[i]
        //selects the textArea inside the hour block
        let selectedTextArea = selectedBlock.children[1]
        //updates the text content of the textArea with the text saved in the savedText array
        selectedTextArea.textContent = savedText[i]
    }
}
//listens for clicks on save buttons
$(".saveBtn").on("click", function(event){
    //prevents browser trying to submit form
    event.preventDefault()
    //selecting the text typed into the textArea next to the save button
    let inputText = (event.target.previousSibling.previousSibling.value)
    //selecting the parent block of the save button
    let blockChanged = (event.target.parentElement)
    //gettting the hour id of the parent block
    let hourChanged = blockChanged.getAttribute("id")
    //updating the index of this hour within the savedText array to the text typed in the textArea
    savedText[hourChanged-9] = inputText
    //saves the updated array to local storage as a string
    localStorage.setItem("savedText", JSON.stringify(savedText))
})