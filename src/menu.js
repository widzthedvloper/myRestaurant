const container = document.getElementById('content');

// eslint-disable-next-line require-jsdoc
function insertMenu() {
  const littleContainer1 = document.createElement('div');
  littleContainer1.setAttribute('class', 'lc1');

  const divImage1 = document.createElement('div');
  divImage1.setAttribute('class', 'im1');
  
  const divText1 = document.createElement('div');
  divText1.setAttribute('class', 'dt1');

  const paragraph1= document.createElement('p');
  const paragraphText1 = document.createTextNode('READY FOR ORDER!!!');
  paragraph1.appendChild(paragraphText1);
  divText1.appendChild(paragraph1);
  littleContainer1.appendChild(divImage1);
  littleContainer1.appendChild(divText1);

  const littleContainer2 = document.createElement('div');
  littleContainer2.setAttribute('class', 'lc2');

  const divImage2 = document.createElement('div');
  divImage2.setAttribute('class', 'im2');
  
  const divText2 = document.createElement('div');
  divText2.setAttribute('class', 'dt2');

  const paragraph2= document.createElement('p');
  const paragraphText2 = document.createTextNode('READY FOR ORDER!!!');
  paragraph2.appendChild(paragraphText2);
  divText2.appendChild(paragraph2);
  littleContainer2.appendChild(divImage2);
  littleContainer2.appendChild(divText2);

  const littleContainer3 = document.createElement('div');
  littleContainer3.setAttribute('class', 'lc3');

  const divImage3 = document.createElement('div');
  divImage3.setAttribute('class', 'im3');
  
  const divText3 = document.createElement('div');
  divText3.setAttribute('class', 'dt3');

  const paragraph3= document.createElement('p');
  const paragraphText3 = document.createTextNode('READY FOR ORDER!!!');
  paragraph3.appendChild(paragraphText3);
  divText3.appendChild(paragraph3);
  littleContainer3.appendChild(divImage3);
  littleContainer3.appendChild(divText3);
  

}

export default insertMenu();