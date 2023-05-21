 import styles from './ProductCard.module.css';
 
 const ProductCard =(producto, onAddToCart) => { 
    
    console.log (producto)

    function handleClick() {
      onAddToCart(producto.key);
    }
   
  
    return (
      <div className={styles.productCard} key={producto.id}>
        <h2>{producto.nombreProd}</h2>  
        <p>Key: {producto.id}</p>
        <p>Id: {producto.id}</p>
        <p>Precio: {producto.precio}</p>
        <p>Descripción: {producto.descripcion}</p>
        <button onClick={handleClick}>Agregar al carrito</button>
      </div>
    );
  }
  
  export default ProductCard;