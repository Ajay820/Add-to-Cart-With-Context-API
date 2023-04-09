import { useCart } from "../context/Context";
import "./CartCard.css";

export const CartCard = ({product}) => {
  const {remove} = useCart()
  const {name, price, image} = product;


  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={()=>remove(product)}>Remove</button>
      </div>
  )
}
