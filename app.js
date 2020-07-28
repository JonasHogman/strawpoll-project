function createNewOption(element) {
  // first check that this is the last option
  if (element.nextElementSibling == null) {
    console.log(element.id);
    question = element.id.split("-")[1];
    option = element.id.split("-")[3];
    console.log(question);
    console.log(option);

    var para = document.createElement("input");
    para.type = "text";
    para.placeholder = "Option";
    para.className = "option-input";
    para.id = "question-" + question + "-option-" + option + 1 + "";
    para.onfocus = function () {
      createNewOption(this);
    };

    element.parentNode.appendChild(para);
  } else {
    console.log(element.nextElementSibling);
  }
}

function createNewQuestion() {}
