const buttons = document.querySelectorAll('.button.calculator');
const display = document.getElementById('display');
let string = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = Event.target;
    if (target.innerHTML === '=') {
      try {
        string = eval(string);
        display.value = string;
      } catch (error) {
        display.value = 'Error';
      }
    } else if (target.innerHTML === 'AC' || target.innerHTML === 'DE') {
      if (target.innerHTML === 'AC') {
        string = '';
        display.value = string
      } else {
        string = string.substring(0, string.length - 1);
        display.value = string;
    }
      
    if (target.innerHTML ==["0","1","2","3","4","5","6","7","8","9"] ){
      string += target.innerHTML   
      display.value = string 
    }
    if(target.innerHTML ==="*") {
        const num = parsefloat(target.innerHTML);
        const num1 = parsefloat(string);
        string = (num1 * num).toString();
        display.value = string
    }
  }});
});