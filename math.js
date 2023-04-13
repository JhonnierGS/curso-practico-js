const ladoCuadrado = document.getElementById('idLadoCuadrado');

const calcularCuadrado = (ladoCuadrado) => {
  const mostrarPerimetro = document.getElementById('mostrarPerimetro');
  const mostrarArea = document.getElementById('mostrarArea');

  let lado = ladoCuadrado.value
  return {
    perimetro: mostrarPerimetro.innerHTML = `${lado * 4}`,
    area: mostrarArea.innerHTML =  `${lado * lado}`
  }
}

const btnCalcularCuadrado = document.getElementById('btnCalcularCuadrado');
btnCalcularCuadrado.addEventListener('click', (e) => {
  event.preventDefault();

  calcularCuadrado(ladoCuadrado)
})

//Triangulo..............

const ladoTriangulo1 = document.getElementById('idLadoTriangulo1');
const ladoTriangulo2 = document.getElementById('idLadoTriangulo2');
const ladoTrianguloBase = document.getElementById('idBaseTriangulo');
const alturaTriangulo = document.getElementById('idAlturaTriangulo');


const calcularTriangulo = (ladoTriangulo1,ladoTriangulo2, ladoTrianguloBase, alturaTriangulo) => {
  const mostrarPerimetroTriangulo = document.getElementById('mostrarPerimetroTriangulo');
  const mostrarAreaTriangulo = document.getElementById('mostrarAreaTriangulo');


  let lado1 = ladoTriangulo1.value
  let lado2 = ladoTriangulo2.value
  let base = ladoTrianguloBase.value
  let altura = alturaTriangulo.value

  return {
    perimetro: mostrarPerimetroTriangulo.innerHTML = `${lado1 + lado2 + base}`,
    area: mostrarAreaTriangulo.innerHTML = `${( base * altura) / 2}`
  }
}

const btnCalcularTriangulo = document.getElementById('btnCalcularTriangulo');
btnCalcularTriangulo.addEventListener('click', (e) => {
  event.preventDefault();

  calcularTriangulo(ladoTriangulo1,ladoTriangulo2, ladoTrianguloBase, alturaTriangulo);
})


//Circulo.............
const idRadioCirculo = document.getElementById('idRadioCirculo');

const calcularCirculo = (radioCirculo) => {
  const mostrarCircunferencia = document.getElementById('mostrarCircunferencia');
  const mostrarAreaCirculo = document.getElementById('mostrarAreaCirculo');


  const diametro = radioCirculo * 2;
  const radio = Math.pow(radioCirculo, 2)
  
  console.log(diametro, radio)
  
  return{
    circunferencia: mostrarCircunferencia.innerHTML = `${diametro * Math.PI.toFixed(3)}`,
    areaCirculo: mostrarAreaCirculo.innerHTML = `${radio * Math.PI}`,
  }
}

const btnCalcularCirculo = document.getElementById('btnCalcularCirculo');
btnCalcularCirculo.addEventListener('click', (e) => {
  event.preventDefault();
  calcularCirculo(idRadioCirculo.value);
})


