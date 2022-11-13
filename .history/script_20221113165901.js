// dynamically build web structure using bootstrap framework
// bootstrap: 

const divContainer = document.createElement("div");
divContainer.id = "main-div-container";
divContainer.className = "container text-center";
document.querySelector("body").appendChild(divContainer);

const divRow = document.createElement("div");
divRow.id = "main-div-row";
divRow.className = "row";
document.querySelector("#main-div-container").appendChild(divRow);

for (i = 0; i < 3; i++){
    // create column div, add class and id
    const div = document.createElement("div");
    div.className = "col";
    div.id = `main-div-col-${i}`;

    // create div for text
    const divText = document.createElement("div");
    divText.textContent = `This is column ${i}. Push the button!`
    divText.className = "colText";
    divText.id = `main-div-col-text-${i}`;

    // create button, add button className depending on i value
    const button = document.createElement("button");
    
    let buttonClassName = "btn btn-warning";
    let buttonMessage = "This is a warning!"
   
    if (i === 1) {
        buttonClassName = "btn btn-success";
        button.textContent = "Success";
        buttonMessage = "This was a success!";
    } else if (i === 2) {
        buttonClassName = "btn btn-danger";
        button.textContent = "Danger";
        buttonMessage = "This is dangerous!";
    } else {
        buttonClassName = "btn btn-warning";
        button.textContent = "Warning";
        buttonMessage = "This is a warning!";
    }
    
    button.className = buttonClassName;

    //addingEventListener(button, message);
   
    // add div column to row
    document.querySelector("#main-div-row").appendChild(div);

    // append div text to div column
    document.querySelector(`#main-div-col-${i}`).appendChild(divText);

    // append button to div column
    document.querySelector(`#main-div-col-${i}`).appendChild(button);
}


// add an event handler for the buttons
function addingEventListener(element, message) {

    function clickAlert() {
        alert(message);
    }

    element.addEventListener('click', clickAlert);
}



 