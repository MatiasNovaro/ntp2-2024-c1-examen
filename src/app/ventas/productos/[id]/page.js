"use client";
import ListaProductos from "./ProductList";
import {useState, useEffect} from "react";

const ProductsPage = ({params}) => {
    const [productos, setProductos] = useState([]);
    const {id} = params;
    useEffect(() => {
      fetch(
        "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
      )
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.find(venta => venta._id === id).items);
      })
      .catch((error) => console.log(error));
    }, []);
  
    return (
      <div>
        <ListaProductos productos={productos} />
      </div>
    );
  };
  export default ProductsPage;