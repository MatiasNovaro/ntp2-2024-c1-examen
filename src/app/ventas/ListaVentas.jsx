"use client";
import "./Ventas.css";
import Venta from "./Venta";

const ventasList = (props) => {
  return (
    <ul className="ventas-list">
      {props.ventas.map((sale) => (
        <Venta
          _id={sale._id}
          saleDate={sale.saleDate}
          storeLocation={sale.storeLocation}
          purchaseMethod={sale.purchaseMethod}
        />
      ))}
    </ul>
  );
};

export default ventasList;