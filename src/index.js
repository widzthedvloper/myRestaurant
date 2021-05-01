import insertNavbar from './homePage';
import homeContent from './homeContent';
import insertMenu from './menu';
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
