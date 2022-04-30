//Ejemplo 1
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);


//Ejemplo 2
var lista = [4,5,6];

for (let i in lista){
    console.log(i);
}


//Ejemplo 3
var lista2 = [4,5,6];

for(var i of lista2){
    console.log(i);
}
