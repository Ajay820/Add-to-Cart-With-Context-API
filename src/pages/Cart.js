import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import {useCart} from "../context/Context"

export const Cart = () => {
  useTitle("Cart");

  const {cartList} = useCart()
  let total1 =0

  cartList.forEach((total)=>(total1 =total.price + total1))


  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length}/${total1}</h1>
        { cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
