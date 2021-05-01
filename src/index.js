import insertNavbar from './homePage';
import homeContent from './homeContent';
import insertMenu from './menu';
import insertForm from './contact';
import './style.css';

insertNavbar();
homeContent();

function removeContent() {
  document.getElementById('content').innerHTML = '';
}

const homebutton = document.getElementById('home');
homebutton.addEventListener('click', () => {
  removeContent();
  homeContent();
});

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {
  removeContent();
  insertMenu();
});

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', () => {
  removeContent();
  insertForm();
});
