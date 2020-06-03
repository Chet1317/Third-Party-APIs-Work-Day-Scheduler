var currentDay = new Date().getHours();
document.getElementById("currentDay").innerHTML = currentDay
var textArea = document.querySelector(".textarea");
var saveButton = document.querySelector(".saveBtn");
var containerEl = document.querySelector(".container")
var hours = [
    {hour: "9 am", number: 9 },
    {hour:"10 am", number:10 },
    {hour: "11 am", number: 11 },
    {hour:"12 pm", number:12 },
    {hour: "1 pm", number: 13 },
    {hour:"2 pm", number:14 },
    {hour: "3 pm", number: 15 },
    {hour:"4 pm", number:16 },
    {hour: "5 pm", number: 17 },
];

for(var i=0; i < hours.length; i++ ){
var hour = hours[i].hour;
var numbers = Number(hours[i].number); 
containerEl.innerHTML +=
`<div class = "row">
    <div class = "hour col">${hour}</div>
    <textarea class = "col-8" data-idx="" id = "${numbers}"></textarea>
    <button type = "col button" onClick="saveWork(${numbers})" class = "saveBtn"><i class = "far fa-save"></i></button>
    </div>`;

    if(currentDay == numbers){
        console.log("this is present");
        $("#" + numbers).addClass("present");
    }else if(currentDay > numbers){
        console.log("This is past hour");
        $("#" + numbers).addClass("past");
    }else {
        console.log("This is future time");
        $("#" + numbers).addClass("future");
    }
}

