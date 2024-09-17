import "./Products.css";

function ProductPage(props){
    return (
        <li className="user-item">
        <div className="card user-item__content">
            <div className="user-item__info">
              <h2>{props.name}</h2>
              <h2>{props.price}</h2>
              <h3>{props.quantity}</h3>
            </div>
        </div>
      </li>
    )
}
export default ProductPage;