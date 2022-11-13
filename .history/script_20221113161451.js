const section = document.createElement("section");
section.id = "main";
document.querySelector("body").appendChild(section);

for (i = 0; i < 3; i++){
    const div = document.createElement("div");
    div.className = "main-columns";
    document.querySelector("#main").appendChild(div);
}
//h2.textContent = "This content added by JavaScript";

 