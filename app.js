const content = document.querySelector(".content");
const title = document.querySelector(".text");
const textArea = document.querySelector(".textarea");
const dateTime = document.querySelector(".datetime");

function contentAdder() {
  if (title.value === "" || textArea.value === "" || dateTime.value === "") {
    console.log("bastard");
  } else {
    const chala = document.createElement("div");
    content.appendChild(chala);
    chala.classList.add("box");
    chala.innerHTML = `
            <div class="first">
                <div class="title_main">${title.value}</div>
                <div class="time_main">${dateTime.value}</div>
            </div>
            <div class="text_main">${textArea.value}</div>
        `;

    title.value = "";
    textArea.value = "";
    dateTime.value = "";
  }
}
