const array = [111,333,444]

//EL PROMEDIO.................................

// Con For
let suma = 0;
for (let index = 0; index < array.length; index++) {
  suma = array[index] + suma;
}
// console.log(suma / array.length);

//Con Reduce
const rta = array.reduce((suma, valorInicial) => {
  suma = suma + valorInicial
  return suma
},0)
// console.log(rta / array.length)

//La mediana.................................

const esPar = (array) => {
  return !(array.length % 2);
}
const esImpar = (array) => {
  return array.length % 2;
}

const calcularMediana = (array) =>{
  const listaEsPar = esPar(array);

  if (listaEsPar) {
    console.log('hola')
  }else{
    let indexMedianaImpar = Math.floor(array.length / 2);
    let medianaImpar = array[indexMedianaImpar]
    return medianaImpar
  }
}

console.log(calcularMediana(array))