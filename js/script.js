
const button = document.getElementById('btn');
const keypress = document.getElementById('myUser');

let myFunction = () => {
  let output = document.getElementById('output');
  let userInput = document.getElementById('myUser').value;

  if (isNaN(userInput) === false){
    console.log(`a number`);

    if (userInput.length < 5 && userInput.length > 3){

      if (userInput % 4 == 0){
        if (userInput % 100 == 0){
          if (userInput % 400 == 0){
            output.innerHTML = `'${userInput}' is a leap year!`;
          }else{
            output.innerHTML = `'${userInput}' is a not a leap year!`;
          }
        }else{
          output.innerHTML = `'${userInput}' is a leap year!`;
        }
      }else{
        output.innerHTML = `'${userInput}' is a not a leap year!`;
      }

    }else if (userInput.length <= 3){
      output.innerHTML = `'${userInput}' less than 4 digits, not a valid year`;
    }else{
      output.innerHTML = `'${userInput}' above 4 digits! Enter valid number.`;
    }
    
  }else{
    output.innerHTML = `'${userInput}' is not a number! Enter a four (4) digit number`;
  }
}


keypress.addEventListener('keyup', (e) =>{
  if (e.keyCode === 13){
    myFunction();
  } else if (e.keyCode === 8) {
    output.innerHTML = '';
  }
});