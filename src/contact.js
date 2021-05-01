const container = document.getElementById('content');

function insertForm() {
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('class', 'container text-white content-div');

  const myForm = document.createElement('form');

  const firstDiv = document.createElement('div');
  firstDiv.setAttribute('class', 'mb-3')
  const firstLabel = document.createElement('label');
  firstLabel.setAttribute('for', 'email');
  firstLabel.setAttribute('class','form-label');
  firstLabel.innerHTML = "Enter your email";
  const firstInput = document.createElement('input');
  firstInput.setAttribute('id', 'email');
  firstInput.setAttribute('class', 'form-control');

  firstDiv.appendChild(firstLabel);
  firstDiv.appendChild(firstInput);

  const secondDiv = document.createElement('div');
  secondDiv.setAttribute('class', 'mb-3');
  const secondLabel = document.createElement('label');
  secondLabel.setAttribute('for', 'message');
  secondLabel.setAttribute('class','form-label');
  secondLabel.innerHTML = "Leave your message";
  const secondInput = document.createElement('textarea');
  secondInput.setAttribute('id', 'message');
  secondInput.setAttribute('class', 'form-control');

  secondDiv.appendChild(secondLabel);
  secondDiv.appendChild(secondInput);

  const button = document.createElement('button');
  button.innerHTML = 'SEND MESSAGE';

  myForm.appendChild(firstDiv);
  myForm.appendChild(secondDiv);
  myForm.appendChild(button);

  contentDiv.appendChild(myForm);
  container.appendChild(contentDiv);
}

export default insertForm;
