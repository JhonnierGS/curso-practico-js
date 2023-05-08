const getPrice = document.getElementById('getPrice');
let discount = 0;

const btnDescuento = document.getElementById('btnDescuento');

const viewDiscount = document.getElementById('viewDiscount');

const aplicarDescuento = (precio, descuento) => {
  console.log(precio, descuento)
  let precioConDescuento = precio * (100 - descuento) / 100;
  return viewDiscount.innerHTML = `${precioConDescuento}`
}


const elementos = document.querySelectorAll('[data-cupon-id]');
elementos.forEach(item => {
  item.addEventListener('click', (e) => {
    let price = getPrice.value
    let dato = item.getAttribute('data-cupon-id')
    const descuentos = {
      cupon1: 25,
      cupon2: 50,
      cupon3: 75,
      cupon4: 90
    };
    discount = descuentos[dato] || 0
    aplicarDescuento(price, discount)
  })
})


