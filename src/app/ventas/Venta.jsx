"use client";
import Link from "next/link";
import "./Ventas.css";

function VentaPage(props){
    return (
        <li className="venta-item">
        <div className="card venta-item__content">
            <div className="venta-item__info">
              <h2>{props.saleDate}</h2>
              <h2>{props.storeLocation }</h2>
              <h3>{props.purchaseMethod}</h3>
            </div>
        </div>
        <div className="card venta-item__content ">
        <Link href={`/ventas/productos/${props._id}`}>Detalle productos</Link>
        <Link  href={`/ventas/customer/${props._id}`}>Detalle cliente</Link>
        </div>
      </li>
    )
}
export default VentaPage;