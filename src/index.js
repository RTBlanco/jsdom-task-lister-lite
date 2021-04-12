document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("tasks");
  const input = document.getElementById("new-task-description");

  document.addEventListener("submit", (e)=> {
    e.preventDefault();

    let listItem = document.createElement("li");
    let deleteBtn = document.createElement("Button");

    deleteBtn.innerHTML = "X";
    listItem.innerHTML = input.value;
    listItem.id = `${index}`

    list.appendChild(listItem);
    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", ()=>{
      deleteBtn.parentElement.remove();
    })

    input.value = ""

  });

});
