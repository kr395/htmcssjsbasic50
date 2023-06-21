let buttons = document.querySelectorAll('.btn');
let display = document.getElementById('display');
let string = "";
let arr = Array.from(buttons);
//let result = eval();
//let submit = document.querySelector('#submit')
//submit.addEventListener('click', eval());
arr.forEach(button => {
    button.addEventListener('click', (e) => {
       if(e.target.innerHTML === '='){
          string = eval(string)
          display.value = string;
           } 
       else if(e.target.innerHTML === 'AC'){
          string = ""
          display.value = string;
       }
       else {
        string += e.target.innerHTML;
        display.value = string;

       }

      
    });
})


