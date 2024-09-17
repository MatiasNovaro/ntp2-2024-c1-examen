"use client";
import ListaVentas from "./listaVentas";
import {useState, useEffect} from "react";

const VentasPage = (props) => {
    const [ventas, setVentas] = useState([]);
  
    useEffect(() => {
      fetch(
        "https://salesbackend.azurewebsites.net/api/sales?pageSize=100&page=1"
      )
        .then((response) => response.json())
        .then((data) => {
          setVentas(data);
        })
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <div>
        <ListaVentas ventas={ventas} />
      </div>
    );
  };
  
  export default VentasPage;