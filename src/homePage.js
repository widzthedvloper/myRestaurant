const container = document.getElementById('content');
function insertNavbar(){
    let navbar = document.createElement('nav');
    navbar.setAttribute('class', 'nav nav-pills nav-justified');
    
    let link1 = document.createElement('a');
    let textLink1 = document.createTextNode('HOME');
    link1.setAttribute('class', 'nav-link text-light');
    link1.setAttribute('href', './index.html');
    link1.appendChild(textLink1);

    let link2 = document.createElement('a');
    let textLink2 = document.createTextNode('MENU');
    link2.setAttribute('class', 'nav-link text-light');
    link2.setAttribute('href', './menu.html');
    link2.appendChild(textLink2);

    let link3 = document.createElement('a');
    let textLink3 = document.createTextNode('CONTACT');
    link3.setAttribute('class', 'nav-link text-light');
    link3.setAttribute('href', './home.html');
    link3.appendChild(textLink3);

    navbar.appendChild(link1);
    navbar.appendChild(link2);
    navbar.appendChild(link3);

    container.appendChild(navbar);

}

export{insertNavbar};
