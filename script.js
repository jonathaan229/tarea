const productos = [
  {
    nombre: 'TAMASHII NATIONS - Godzilla Evolved de Kong: The New Empire (2024) S.H.MonsterArts Figura de Acción',
    descripcion: 'GODZILLA Evolved From GODZILLA x KONG: El nuevo imperio [2024] se une a la línea S.H.MonsterArts...',
    precio: 2724,
    imagen: 'godzillash'
  },
  {
    nombre: 'TAMASHII NATIONS - Godzilla x Kong: The New Empire - Shimo...',
    descripcion: 'De la película "Godzilla x Kong: The New Empire", SHIMO se une a S.H.MonsterArts!...',
    precio: 5299,
    imagen: 'shimosh'
  },
  {
    nombre: 'TAMASHII NATIONS - Godzilla x Kong: The New Empire - Suko & Mothra...',
    descripcion: 'De la película "GODZILLA x KONG: The New Empire", S.H.MonsterArts está lanzando SUKO & MOTHRA...',
    precio: 2299,
    imagen: 'mothrash'
  },
  {
    nombre: 'TAMASHII NATIONS - Kong from Godzilla x Kong: The New Empire (2024)...',
    descripcion: 'KONG, de "GODZILLA x KONG: THE NEW EMPIRE" se une a S.H.MonsterArts!...',
    precio: 1532,
    imagen: 'kongsh'
  }
];

const catalogo = document.getElementById('catalogo');

function crearTarjetaProducto(producto) {
  const card = document.createElement('div');
  card.className = 'producto-card';

  const imagen = document.createElement('img');
  imagen.src = `imagenes/${producto.imagen}.jpg`;
  imagen.alt = producto.nombre;

  const titulo = document.createElement('h2');
  titulo.textContent = producto.nombre;

  const descripcion = document.createElement('p');
  descripcion.textContent = producto.descripcion;

  const precio = document.createElement('span');
  precio.className = 'precio';
  precio.textContent = `$${producto.precio.toFixed(2)}`;

  const boton = document.createElement('button');
  boton.className = 'btn-comprar';
  boton.textContent = 'Comprar';

  card.appendChild(imagen);
  card.appendChild(titulo);
  card.appendChild(descripcion);
  card.appendChild(precio);
  card.appendChild(boton);

  return card;
}

function renderizarCatalogo() {
  catalogo.innerHTML = '';
  productos.forEach(producto => {
    const tarjeta = crearTarjetaProducto(producto);
    catalogo.appendChild(tarjeta);
  });
}

window.onload = renderizarCatalogo;
