const divContainer = document.createElement("div");
divContainer.id = "main-div-container";
divContainer.className = "container text-center";
document.querySelector("body").appendChild(divContainer);

const divRow = document.createElement("div");
divRow.id = "main-div-row";
divRow.className = "row";
document.querySelector("#main-div-container").appendChild(divRow);

for (i = 0; i < 3; i++){
    // create column div, add class, id, and text content
    const div = document.createElement("div");
    div.className = "col";
    div.id = `main-div-col-${i}`;
    div.textContent = `This is column ${i}.`

    // create button, add button className depending on i value
    const button = document.createElement("button");
    let buttonClassName;
    
    if (i = 1) {
        buttonClassName = "btn btn-success";
    } else if (i = 2) {
        buttonClassName = "btn btn-danger";
    } else {
        buttonClassName = "btn btn-warning";
    }
    button.className = buttonClassName;

    // append button to column
    document.querySelector(`#main-div-col-${i}`).appendChild(button);

    document.querySelector("#main-div-row").appendChild(div);
}

<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>




 