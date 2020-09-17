//Declared variable for container
let container = $(".container");

//Declared variable for jumbotron
let jumboDisplay = $('.jumbotron')

//Array used to display each hour on the work calendar
let listTimes = ['9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'];

//Display for the current day and time at the top of the page
let displayTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
jumboDisplay.append(displayTime);

//Created for loop to append time, input text area, save button, to web page.
for (let i = 0; i < listTimes.length; i++) {

 //Stored each element in variable 'time' to increment through array in for loop.
    let time = listTimes[i];

 //Created section and div tags
    let sectionElement = $('<section>').addClass('row');
    let hourElement = $('<div>').addClass('col-md-3');

 //changed font color of hour displayed to white for visibility   
    hourElement.css('color', 'white');
    hourElement.text(time);
   
 //Appended div to section
    sectionElement.append(hourElement);

 //Created div and input tags
    let inputElement = $('<div>').addClass('col-md-6');
    let input = $('<input type= "text">');

 // Set attribute and appended input to page
    input.addClass('input');
    input.attr('id', time);
    inputElement.append(input);
    sectionElement.append(inputElement);
    let savedText = localStorage.getItem(time);
    input.val(savedText);

 // Creating save button
    let saveElement = $('<div>').addClass('col-md-3');
    let saveBtn = $('<button>').addClass('save-btn');

 // Set attribute and appended save button to page
    saveBtn.attr('date-time', time);
    saveBtn.text('save');
    saveElement.append(saveBtn);
    sectionElement.append(saveElement);
    container.append(sectionElement);

 // click event to save to local storage
    saveBtn.on("click", function () {
        localStorage.setItem(time, input.val())
    });

    let present = moment();
    moment().hour();
    let presentHour = moment().hour();
    let listNumbers = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    
 // Created if statement to set section background color according to condition
    if (presentHour === listNumbers[i]) {
        sectionElement.css('background-color', 'red');
    } else if (presentHour < listNumbers[i]) {
        sectionElement.css('background-color', 'blue');
    } else if (presentHour > listNumbers[i]) {
        sectionElement.css('background-color', 'green');
    }
}