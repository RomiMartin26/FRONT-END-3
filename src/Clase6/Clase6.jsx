import accounts from '../fakeApi/accounts.json'
import products from '../fakeApi/products.json'
import users from '../fakeApi/users.json'
import ProductCard from './ProductCard'
import './Clase6.css'


function Clase6() {
  function handleAddToCart(id) {
    console.log(`Agregado al carrito el producto con id ${id}`)
  }

  console.log(products)
  console.log(accounts)
  console.log(users)

  return (
    <>
      <div className="flex">
        {products.map((product) => {
          return (

            <ProductCard
              key={product.id}
              id={product.id}
              nombreProd={product.nombreProd}
              precio={product.precio}
              descripcion={product.descripcion}
              onAddToCart={handleAddToCart}
            />
          )
        })}
      </div>
      <hr />

      <div className="flex">
        {accounts.map((cuenta) => {
          return (
            
            <div className="card" key={cuenta.account}>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://twitter.com/${cuenta.account}`}
              >
                {cuenta.account}
              </a>
            </div>
          )
        })}
      </div>
      <hr />

      <div className="flex height-limited">
        {users.map((usuario) => {
          return (
            <div className="card" key={usuario.email}>
              <h2>{usuario.apodo}</h2>
              <ul>
                {usuario.mascotas.map((mascota) => (
                  <li key={mascota.nombre}>
                    {mascota.nombre} ({mascota.edad}): {mascota.color}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Clase6
