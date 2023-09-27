const input = document.querySelector("#note-input") as HTMLInputElement;

//form
const form = document.querySelector(".note-app-container") as HTMLFormElement;
console.log(form);

//lay du lieu local ve
const data = localStorage.getItem("notes");
const notes = data ? JSON.parse(data) : [];
//validate
form?.addEventListener("submit", (e): void => {
  e.preventDefault();

  const content = input.value;
  if (!content) {
    alert("Nội dung không để trống");
    return;
  }
  const task: { content: string } = { content: content };
  console.log(task);

  notes.push(task);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
});

//notes
function renderNotes(): void {
  let html = "";
  notes.map((note: { content: string }, index: number) => {
    html += ` <div class="task-content">
    <p>${note.content}</p>
    <div class='delete-btn'><button class="icon" onclick='deleteNote(${index})'><i class="fa-solid fa-trash"></i></button></div>
</div>`;
  });

  //show
  const tasksElement = document.querySelector(".tasks") as HTMLDivElement;
  tasksElement.innerHTML = html;
}
renderNotes();

//delee note
function deleteNote(index: number): void {
  notes.splice(index, 1);
  renderNotes();
}
