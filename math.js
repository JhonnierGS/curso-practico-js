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

const calularTrianguloIsoceles = (lados, base) => {

  if(lados == base){
    console.log('este no es un triangulo isoceles')
  }else{
    // h = raizCuadrada(lados ** 2 - (b**2)/4)
    return Math.sqrt((lados ** 2) - ((base**2) / 4));
  }
}

function calcularAlturaTrianguloEscaleno(a, b, c) {
  let a = lado1;
  let b = lado2;
  let c = lado3;
  if (a == b || b == c || c == a) {
    return false
  } else {
    // Si es escaleno, calculamos primero su area
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // Ahora usamos que A = bh/2, por lo que h = 2A/b
    let altura_a = Math.floor(2 * area / a);
    let altura_b = Math.floor(2 * area / b);
    let altura_c = Math.floor(2 * area / c);

    // IMPTE: No se especifica cual de las alturas se quiere, tras probar el codigo conclui que se busca la altura respecto a 'a' como base
    return altura_a;
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


