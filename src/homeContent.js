const container = document.getElementById('content');

function homeContent() {
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('class', 'container my-3 mx-3 content-div');

  const title = document.createElement('h1');
  const titleText = document.createTextNode('HUNGRY?');
  title.appendChild(titleText);

  const paragraph = document.createElement('p');
  const paragraphText = document.createTextNode('We have a large menu of delicious pizza to demolish any appetite.');
  paragraph.appendChild(paragraphText);

  const orderButton = document.createElement('button');
  orderButton.setAttribute('class', 'order-button');
  orderButton.value = 'ORDER NOW';

  contentDiv.appendChild(title);
  contentDiv.appendChild(paragraph);
  contentDiv.appendChild(orderButton);

  container.appendChild(contentDiv);
}

export default homeContent();
