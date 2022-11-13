const mainSection = document.createElement("section");
mainSection.id = "main-section";
document.querySelector("body").appendChild(mainSection);

for (i = 0; i < 3; i++){
    const div = document.createElement("div");
    div.className = "main-columns";
    div.id = `main-col-${i}`;
    document.querySelector("#main-section").appendChild(div);
}
//h2.textContent = "This content added by JavaScript";

 