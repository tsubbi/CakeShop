let formType = ["name", "phone", "email", "message"];
let form = document.querySelector("form");

let line = document.createElement("div");
line.classList.add("lines");
let h3 = document.createElement("h3");
h3.append(document.createTextNode("Order Form"));

form.append(line, h3);
formType.forEach(inputName => {
    let singleForm = document.createElement("div");
    singleForm.classList.add("singleForm");

    let element = document.createElement(inputName === "message" ? "textarea" : "input");
    element.setAttribute("type", "text");
    element.setAttribute("name", inputName);
    element.required = true;

    let label = document.createElement("label");
    label.setAttribute("for", inputName);
    label.append(document.createTextNode(inputName));

    singleForm.append(element, label);
    form.append(singleForm);
});

let btn = document.createElement("div");
btn.classList.add("submit-button");
let input = document.createElement("input");
input.setAttribute("type", "submit");
input.setAttribute("value", "Sent");
btn.append(input);

form.append(btn);