"use client";
import "./Cliente.css";

export default function ClientPage(props){
    return (
        <li className="user-item">
          <div className="card user-item__content">
              <div className="user-item__info">
                <h2>{props.cliente.gender}</h2>
                <h2>{props.cliente.age}</h2>
                <h3>{props.cliente.email}</h3>
                <h3>{props.cliente.satisfaction}</h3>
              </div>
          </div>
        </li>
      );
}