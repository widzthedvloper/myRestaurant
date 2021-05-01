import insertNavbar from './homePage';
import homeContent from './homeContent';
import insertMenu from './menu';
import './style.css';

insertNavbar();
homeContent();

const menuButton = document.getElementById('menu');
const content = document.getElementById('content');

menuButton.addEventListener('click',() => {
  content.removeChild(content.childNodes);
  insertMenu();
});
