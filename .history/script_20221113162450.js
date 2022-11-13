const divContainer = document.createElement("div");
divContainer.id = "main-div-container";
divContainer.className = "container text-center";
document.querySelector("body").appendChild(divContainer);

const divRow = document.createElement("div");
divRow.id = "main-div-row";
divRow.className = "row";
document.querySelector("#main-div-container").appendChild(divRow);

for (i = 0; i < 3; i++){
    const div = document.createElement("div");
    div.className = "col";
    div.id = `main-div-col-${i}`;
    div.textContent = `This is column ${i}.`
    document.querySelector("#main-div-row").appendChild(div);
}
//h2.textContent = "This content added by JavaScript";




 