import "./ProductCard.css";
import { useCart } from "../context/Context";

export const ProductCard = ({product}) => {
  const {addtocart} = useCart()
  const {name, price, image} = product;

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={()=>addtocart(product)}>Add To Cart</button>
      </div>
    </div>
  )
}
