"use client";
import "./Products.css";
import Product from "./Producto";

const ProductsList = (props) =>{
    return (
     <ul className="users-list">
      {props.productos.map((product) => (
        <Product
          name={product.name}
          price={product.price.$numberDecimal}
          quantity={product.quantity}
        />
      ))}
    </ul>
    )
}
export default ProductsList;