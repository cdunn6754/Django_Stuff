
tds = document.querySelectorAll('td')
resetButton = document.querySelector('button')

resetButton.addEventListener("click",function(){
  for(var i=0; i< tds.length; i++) {
        tds[i].textContent = '';
  }
})

for(var i=0; i< tds.length; i++) {
      tds[i].addEventListener("click", setX(i));
      tds[i].addEventListener("dblclick", setO(i));
}

function setX(i) {
   return function(){
            tds[i].textContent = 'x';
          };
}

function setO(i) {
   return function(){
            console.log("made it here too")
            tds[i].textContent = 'O';
          };
}
