const container = document.getElementById('content');

function homeContent() {
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('class', 'container text-white content-div');

  const title = document.createElement('h1');
  title.setAttribute('class', 'home-title');
  const titleText = document.createTextNode('HUNGRY?');
  title.appendChild(titleText);

  const paragraph = document.createElement('p');
  const paragraphText = document.createTextNode('We have a large menu of delicious pizza to demolish any appetite.');
  paragraph.setAttribute('class', 'home-paragraph');
  paragraph.appendChild(paragraphText);

  const orderButton = document.createElement('button');
  orderButton.setAttribute('class', 'order-button');
  const buttonText = document.createTextNode('ORDER NOW');
  orderButton.appendChild(buttonText);

  contentDiv.appendChild(title);
  contentDiv.appendChild(paragraph);
  contentDiv.appendChild(orderButton);

  container.appendChild(contentDiv);
}

export default homeContent();
