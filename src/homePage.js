const container = document.getElementById('content');

// eslint-disable-next-line require-jsdoc
function insertNavbar() {
  const navbar = document.createElement('nav');
  navbar.setAttribute('class', 'nav nav-pills nav-justified');

  const link1 = document.createElement('a');
  const textLink1 = document.createTextNode('HOME');
  link1.setAttribute('class', 'nav-link text-light');
  link1.setAttribute('href', './index.html');
  link1.appendChild(textLink1);

  const link2 = document.createElement('a');
  const textLink2 = document.createTextNode('MENU');
  link2.setAttribute('class', 'nav-link text-light');
  link2.setAttribute('href', './menu.html');
  link2.appendChild(textLink2);

  const link3 = document.createElement('a');
  const textLink3 = document.createTextNode('CONTACT');
  link3.setAttribute('class', 'nav-link text-light');
  link3.setAttribute('href', './home.html');
  link3.appendChild(textLink3);

  navbar.appendChild(link1);
  navbar.appendChild(link2);
  navbar.appendChild(link3);

  container.appendChild(navbar);
}

export default insertNavbar();
