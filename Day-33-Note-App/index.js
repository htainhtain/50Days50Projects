// dom
const noteContainer = document.querySelector(".note-container");

const button = document.querySelector(".add-note-button");
const firstDeleteButton = document.querySelector(".delete-button");
const firstEditButton = document.querySelector(".edit-button");

button.addEventListener("click", () => {
  const noteEditorContainerDiv = document.createElement("div");
  noteEditorContainerDiv.classList.add("note-editor-container");
  const noteEditorContainerDivHtml = `
  <div class="note-edit-area">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="edit-button">
              <path
                d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6Zm-3.525-.725-.7-.7 1.4 1.4Z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="delete-button">
              <path
                d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21ZM17 6H7v13h10ZM9 17h2V8H9Zm4 0h2V8h-2ZM7 6v13Z"
              />
            </svg>
          </div>
          <div class="note-text-area">
            <textarea
              name="note"
              id=""
              cols="30"
              rows="10"
              class="note"
            ></textarea>
          </div>
  `;
  noteEditorContainerDiv.innerHTML = noteEditorContainerDivHtml;
  noteContainer.appendChild(noteEditorContainerDiv);
  const deleteButtons = document.querySelectorAll(`.delete-button`);
  const editButtons = document.querySelectorAll(`.edit-button`);
  const deleteButton = deleteButtons[deleteButtons.length - 1];
  const editButton = editButtons[editButtons.length - 1];
  listenEdit(editButton);
  listenDelete(deleteButton);
});

const listenDelete = (deleteButton) => {
  deleteButton.addEventListener("click", () => {
    const parentElement = deleteButton.parentElement.parentElement;
    parentElement.remove();
  });
};

const listenEdit = (editButton) => {
  editButton.addEventListener("click", () => {
    const parentElement = editButton.parentElement.parentElement;
    const note = parentElement.childNodes[3].childNodes[1];

    note.disabled = note.disabled === true ? false : true;
    if (!note.disabled) {
      note.focus();
    }
    parentElement.classList.toggle('no-edit-change-color')
  });
};

listenEdit(firstEditButton);
listenDelete(firstDeleteButton);
