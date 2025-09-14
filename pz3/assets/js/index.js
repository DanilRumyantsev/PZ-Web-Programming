document.addEventListener("DOMContentLoaded", function () {
  getText();
  changeBackground();
  disabledButton();
  getWindowSize();
  resizeButton();
  editLinkText();
  maxLength();
  createButton();
  highlight();
  removeActive();
  findBox();
  editTextHeader();
  getTextButton();
  addItemInUl();
  appendProducts();
  setupDynamicForm();
});

function editHeader() {
  const header = document.getElementById("header");

  header.textContent = "Заголовок изменен";
}

function resizeButton() {
  const button = document.querySelector(".task");

  if (button) {
    button.addEventListener("mouseenter", function () {
      this.classList.add("box");
    });

    button.addEventListener("mouseleave", function () {
      this.classList.remove("box");
    });
  }
}

function getText() {
  const input = document.getElementById("inputField");
  const output = document.getElementById("outputText");

  input.addEventListener("input", function () {
    const text = this.value;
    output.value = text || "Тут будет вывод";
  });
}

function changeBackground() {
  const box = document.getElementById("backgroundBox");

  box.addEventListener("dblclick", function () {
    box.classList.add("backgroundGreen");
  });
}

function disabledButton() {
  const checkbox = document.getElementById("agreeCheckbox");
  const button = document.getElementById("submitButton");

  checkbox.addEventListener("change", function () {
    button.disabled = !this.checked;
    if (button.disabled) {
      button.textContent = "Неактивная кнопка";
    } else {
      {
        button.textContent = "Активная кнопка";
      }
    }
  });
}

function getWindowSize() {
  const windowBox = document.getElementById("windowSize");

  function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    windowBox.textContent = `Размер окна: Ширина: ${width}px, Высота: ${height}px`;
  }

  window.addEventListener("resize", updateWindowSize);

  updateWindowSize();
}

function editLinkText() {
  const link = document.getElementById("link");

  if (link) {
    link.addEventListener("mouseenter", function () {
      this.textContent = "Вы навели мышь";
    });

    link.addEventListener("mouseleave", function () {
      this.textContent = "Ссылка";
    });
  }
}

function displayNoneButton() {
  const button = document.getElementById("hideMe");

  button.classList.add("noneElement");
}

function maxLength() {
  const input = document.getElementById("textField");

  input.addEventListener("input", function () {
    let text = this.value;

    if (text > 10) {
      text = text.substring(0, 10);
      this.value = text;
    }

    input.addEventListener("keypress", function (e) {
      if (this.value.length >= 10) {
        e.preventDefault();
        input.classList.add("excessed");
      } else {
        input.classList.remove("excessed");
      }
    });
  });
}

function buttonToggle() {
  const box = document.getElementById("toggleBox");

  if (box.classList.contains("active")) {
    box.classList.remove("active");
    box.classList.add("inactive");
  } else {
    box.classList.remove("inactive");
    box.classList.add("active");
  }
}

function createButton() {
  const section = document.createElement("section");
  const container = document.createElement("div");
  const button = document.createElement("button");

  button.textContent = "Нажми меня";

  button.className = "task";
  container.className = "container";
  section.className = "section";

  section.appendChild(container);
  container.appendChild(button);
  document.body.appendChild(section);
}

function highlight() {
  const button = document.getElementById("example");

  button.addEventListener("click", function () {
    if (this.click) {
      if (button.classList.contains("highlight")) {
        button.classList.remove("highlight");
      } else {
        button.classList.add("highlight");
      }
    }
  });
}

function removeActive() {
  const button = document.getElementsByClassName("button");

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      if (this.click) {
        if (button[i].classList.contains("active")) {
          button[i].classList.remove("active");
        } else {
          button[i].classList.add("active");
        }
      }
    });
  }
}

function findBox() {
  const box = document.querySelector(".box");

  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = "red";
}

function editTextHeader() {
  const header = document.getElementById("header");

  header.textContent = "Добро пожаловать!";
}

function getTextButton() {
  const button = document.getElementById("myButton");

  button.addEventListener("click", function () {
    if (this.click) {
      console.log("Кнопка нажата");
    }
  });
}

function addItemInUl() {
  const ul = document.getElementById("ul");

  let li = document.createElement("li");

  ul.appendChild(li);

  li.textContent = "4";
}

function deleteButton() {
  const button = document.getElementById("deleteMe");

  button.remove();
}

function changeTextFromArr(textsArray) {
  const items = document.querySelectorAll(".item");

  items.forEach((item, index) => {
    if (index < textsArray.length) {
      item.textContent = textsArray[index];
    } else {
      item.textContent = `Текст ${index + 1}`;
    }

    item.classList.add("changed");
  });
}

function appendProducts() {
  const list = ["shampoo", "hotdog", "pizza", "showel", "axe"];
  const ul = document.getElementById("productList");

  list.forEach((element) => {
    let li = document.createElement("li");
    li.textContent = element;
    li.className = "item";
    ul.appendChild(li);
  });
}

function changeElements(objectsArray) {
  objectsArray.forEach((obj) => {
    const element = document.getElementById(obj.id);

    element.classList.add("highlight");
  });
}

function setupDynamicForm() {
  const form = document.getElementById("userForm");
  const nameInput = document.getElementById("userName");
  const ageInput = document.getElementById("userAge");
  const tableBody = document.getElementById("usersTableBody");
  const noUsersMessage = document.getElementById("noUsersMessage");

  updateTableVisibility();

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = nameInput.value.trim();
      const age = parseInt(ageInput.value);

      if (validateForm(name, age, nameInput, ageInput)) {
        addUserToTable(name, age);

        form.reset();

        nameInput.classList.remove("valid", "invalid");
        ageInput.classList.remove("valid", "invalid");
      }
    });
  }

  if (ageInput) {
    ageInput.addEventListener("input", function () {
      const age = parseInt(this.value);
      if (this.value !== "" && (isNaN(age) || age < 1 || age > 120)) {
        this.classList.add("invalid");
        this.classList.remove("valid");
      } else if (this.value !== "" && age >= 1) {
        if (age < 18) {
          this.classList.add("invalid");
          this.classList.remove("valid");
        } else {
          this.classList.add("valid");
          this.classList.remove("invalid");
        }
      } else {
        this.classList.remove("valid", "invalid");
      }
    });
  }
}

function validateForm(name, age, nameInput, ageInput) {
  let isValid = true;

  if (!name || name.length < 2) {
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
    isValid = false;
  } else {
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
  }

  if (isNaN(age) || age < 1 || age > 120) {
    ageInput.classList.add("invalid");
    ageInput.classList.remove("valid");
    isValid = false;
  } else {
    if (age < 18) {
      ageInput.classList.add("invalid");
      ageInput.classList.remove("valid");
    } else {
      ageInput.classList.add("valid");
      ageInput.classList.remove("invalid");
    }
  }

  return isValid;
}

function addUserToTable(name, age) {
  const tableBody = document.getElementById("usersTableBody");
  const noUsersMessage = document.getElementById("noUsersMessage");

  if (tableBody) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const statusCell = document.createElement("td");

    nameCell.textContent = name;
    ageCell.textContent = age;

    if (age < 18) {
      statusCell.textContent = "Несовершеннолетний";
      statusCell.className = "minor";
      row.className = "minor";
    } else {
      statusCell.textContent = "Совершеннолетний";
      statusCell.className = "adult";
      row.className = "adult";
    }

    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(statusCell);

    tableBody.appendChild(row);

    if (noUsersMessage) {
      noUsersMessage.style.display = "none";
    }
  }
}

function updateTableVisibility() {
  const tableBody = document.getElementById("usersTableBody");
  const noUsersMessage = document.getElementById("noUsersMessage");

  if (tableBody && noUsersMessage) {
    if (tableBody.children.length === 0) {
      noUsersMessage.style.display = "block";
    } else {
      noUsersMessage.style.display = "none";
    }
  }
}

function clearUsersTable() {
  const tableBody = document.getElementById("usersTableBody");
  const noUsersMessage = document.getElementById("noUsersMessage");

  if (tableBody) {
    tableBody.innerHTML = "";
    if (noUsersMessage) {
      noUsersMessage.style.display = "block";
    }
  }
}
