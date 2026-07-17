```
'use strich';

let company = prompt('Введите ваше число:', "");

if(company >= 1){
  alert('Ваше число больше чем 0');
}else if(company <= -1){
  alert('Ваше число меньше чем 0');
}else if(company == 0){
  alert('Ваше число равно 0');  
}else(company != Number){
  alert('Введите пожалуйста число, а не буквы!');
}  
```