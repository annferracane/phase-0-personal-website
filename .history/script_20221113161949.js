const divContainer = document.createElement("div");
divContainer.id = "main-section";
divContainer.className = "container text-center";
document.querySelector("body").appendChild(divContainer);

for (i = 0; i < 3; i++){
    const div = document.createElement("div");
    div.className = "main-columns";
    div.id = `main-col-${i}`;
    document.querySelector("#main-section").appendChild(div);
}
//h2.textContent = "This content added by JavaScript";


<div class="container text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>

 