let board = document.querySelector('#container');
const NUMBER = 416;

for (let i = 0; i < NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);


square.onmouseover = function(){
    //const color = ["red ", "blue", "yellow", "orange"];
    const rand = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
    //let rand = color[Math.floor(Math.random() * color.length)];
    square.style.transition = "background-color 0.2 s"
    square.style.boxShadow = `1px 1px 20px ${rand}`;
    square.style.backgroundColor = rand;
    

}
square.onmouseout = function(){
    square.style.transition = "background-color 1.2s ease-out";
    square.style.boxShadow = "none";
    square.style.backgroundColor = "rgb(27, 27, 27)";
}
}