
updateText = () => {
  // CODE GOES HERE
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
}
  

makeBold = (elem) => {
  //CODE GOES HERE
  //console.log(elem);
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}
  
 
makeItalic = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}
  
makeUnderline = (elem) => {
  //CODE GOES HERE
  elem.classList.toggle('active');
  let formattedText = document.getElementById('text-output');
  if (formattedText.classList.contains('underline')) {
    formattedText.classList.remove('underline');
  } else {
    formattedText.classList.add('underline');
  }
}
  

alignText = (elem, alignType) => {
  // CODE GOES HERE
  //elem.classList.toggle('active');
  document.getElementById('text-output').style.textAlign = alignType;
  //console.log(alignType);

  let alignButtons = document.getElementsByClassName('align');
  
  console.log(alignButtons);

  for (let button of alignButtons) {
    elem.classList.add('active');
  }
}