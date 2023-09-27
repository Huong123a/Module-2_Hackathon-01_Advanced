"use strict";
const input = document.querySelector("#note-input");
//form
const form = document.querySelector(".note-app-container");
console.log(form);
//lay du lieu local ve
const data = localStorage.getItem("notes");
const notes = data ? JSON.parse(data) : [];
//validate
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const content = input.value;
    if (!content) {
        alert("Nội dung không để trống");
        return;
    }
    const task = { content: content };
    console.log(task);
    notes.push(task);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
});
//notes
function renderNotes() {
    let html = "";
    notes.map((note, index) => {
        html += ` <div class="task-content">
    <p>${note.content}</p>
    <div class='delete-btn'><button class="icon" onclick='deleteNote(${index})'><i class="fa-solid fa-trash"></i></button></div>
</div>`;
    });
    //show
    const tasksElement = document.querySelector(".tasks");
    tasksElement.innerHTML = html;
}
renderNotes();
//delee note
function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}
