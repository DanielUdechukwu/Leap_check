// LEAP YEAR PROGRAM

const button = document.getElementById('btn');

function myFunction(){
  let userInput = document.getElementById('myUser').value;
  let output = document.getElementById('output');

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




      // if (userInput % 4 == 0){
    
      //   if (userInput % 100 == 0 && userInput % 400 != 0){
      //     output.innerHTML = `'${userInput}' is a not a leap year!`;
      //   }else if (userInput % 400 == 0){
      //     output.innerHTML = `'${userInput}' is a leap year`;
      //   }else {
      //     output.innerHTML = `'${userInput}' is a not a leap year!`;
      //   }
      // }else{
      //   output.innerHTML = `'${userInput}' is a not a leap year!`;
      // }
    }else if (userInput.length <= 3){
      output.innerHTML = `'${userInput}' less than 4 digits, not a valid year`;
    }else{
      output.innerHTML = `'${userInput}' above 4 digits! Enter valid number.`;
    }
    
  }else{
    output.innerHTML = `'${userInput}' is not a number! Enter a four (4) digit number`;
  }
}











// else{
//   console.log(false);
// }

// typeof year === 'number' && year.toString().length === 4 ? console.log(true) : console.log(false);

