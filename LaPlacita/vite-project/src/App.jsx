import React from 'react';
import NavbarComponent from './components/NavbarComponent';

function App() {
  const products = [
    { id: 1, name: 'Babysec - Ultrasec', price: 3200, content: 60 },
    { id: 2, name: 'Pampers - Premium care, piel delicada', price: 5900, content: 58},
    { id: 3, name: 'Pampers - Premium care, recién nacido hipoalergénico', price: 2420, content: 36},
  ]

  return (
    <div>
      <NavbarComponent />
      <h1>Productos de nuestra pañalera</h1>
    <ol>
      {products.map(product => {
        return (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.content}
          </li>
        )
      })}
    </ol>
    <h1>Productos con mayor cantidad de pañales</h1>
    <ul>
      {products.filter(product => product.content >50).map(product => {
        return(
          <li key={product.id}>
            {product.name} - {product.price} - {product.content}
          </li>
        )
        })}
    </ul>
    </div>
  )
}

export default App
