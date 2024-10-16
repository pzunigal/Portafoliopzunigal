function createSquare(){
    const section = document.querySelector('section');
    const square = document.createElement('span');
    var size = Math.random() * -10;
    
    square.style.width = 8 + size + 'px';
    square.style.height = 8 + size + 'px';
    
      square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';
    
    section.appendChild(square);
  
  }
  setInterval(createSquare , 150)
  