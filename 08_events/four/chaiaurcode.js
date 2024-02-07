const randomColor = function (){
    const hex = '123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]// plus 1 was not use to get zero
    }
    return color;
}
function changeBgColor(){    
document.body.style.backgroundColor = randomColor();
}
let interval;
const startChangingColor = function(){
    if (!interval) 
    interval = setInterval(changeBgColor,1000)
}
const stopChangingColor = function(){
  clearInterval(interval)
  interval = null
}


document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
