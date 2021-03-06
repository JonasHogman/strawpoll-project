function closeModal() {
  modalElement = document.getElementById("modal");
  modalElement.style.display = "none";
}

function openModal() {
  modalElement = document.getElementById("modal");
  modalElement.style.display = "block";
}

function createNewOption(element) {
  // first check that this is the last option
  if (
    element.nextElementSibling == null &&
    element.id != "question-1-option-1" &&
    element.id != "question-2-option-1"
  ) {
    let question = parseInt(element.id.split("-")[1]);
    let option = parseInt(element.id.split("-")[3]);

    let newOption = document.createElement("input");
    newOption.type = "text";
    newOption.placeholder = "Option";
    newOption.className = "option-input";
    newOption.id = "question-" + question + "-option-" + (option + 1) + "";
    newOption.onfocus = function () {
      createNewOption(this);
    };

    element.parentNode.appendChild(newOption);
  }
  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

function createNewQuestion(element) {
  var questionsWrapper = element.parentNode.parentNode.parentNode;
  if (
    questionsWrapper.nextElementSibling == null &&
    element.id != "question-1"
  ) {
    let question = parseInt(element.id.split("-")[1]);

    let questionBoxHtml = `
    <div class="box-header">
      <div class="menu-icon">
        <span class="material-icons md-light">
          menu
        </span>
      </div>
    </div>
    <form autocomplete="off" class="card-form">
      <input
        type="text"
        id="question-${question + 1}"
        name="question-${question + 1}"
        class="question-input"
        placeholder="Question"
        onfocus="createNewQuestion(this)"
        autofocus
      />
      <div class="options-form">
        <input
          type="text"
          placeholder="Option"
          class="option-input"
          id="question-${question + 1}-option-1"
          onfocus="createNewOption(this)"
        />
      </div>
      <div class="options-form">
        <input
          type="text"
          placeholder="Option"
          class="option-input"
          id="question-${question + 1}-option-2"
          onfocus="createNewOption(this)"
        />
      </div>
    </form>`;
    newQuestionBox = document.createElement("div");
    newQuestionBox.className = "box";
    newQuestionBox.innerHTML = questionBoxHtml;

    button = document.getElementById("submit-btn");

    questionsWrapper.insertBefore(newQuestionBox, button);
  }
  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
