let dayTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
let hour = moment().format("H");
let hourBlocks = [$("#9"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")]

let savedText = JSON.parse(localStorage.getItem("savedText"));

if (savedText) {
    updateText()
} else {
    savedText = ["", "", "", "", "", "", "", "", ""]
}



$("#currentDay").text(dayTime)

hourBlocks.forEach(element => checkHour(element))

    
function checkHour(element){
    var hourBlock = parseInt(element.attr("id"))
    if (hourBlock<hour){
        element.addClass("past")
    } else if (hourBlock>hour){
        element.addClass("future")
    }else if (hourBlock=hour){
        element.addClass("present")
    }
}

function updateText (){
    for (let i=0; i<9; i++){
        let selectedBlock = $(".container").children(0)[i]
        let selectedTextArea = selectedBlock.children[1]
        selectedTextArea.textContent = savedText[i]

    }
}

$(".saveBtn").on("click", function(event){
    event.preventDefault()
    let inputText = (event.target.previousSibling.previousSibling.value)
    let blockChanged = (event.target.parentElement)
    let hourChanged = blockChanged.getAttribute("id")
    savedText[hourChanged-9] = inputText
    localStorage.setItem("savedText", JSON.stringify(savedText))
})