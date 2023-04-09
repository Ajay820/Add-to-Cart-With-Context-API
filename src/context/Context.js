import { createContext, useContext, useReducer } from "react"

import { CartReducer } from "../reducer/UseReducer"


const intitalState={
    cartList:[],
    total:0
}

const CartContext = createContext(intitalState)

export const CartProvider = ({children})=>{
    const [state,dispatch] = useReducer(CartReducer,intitalState);

    const addtocart =(product)=>{
        const update = state.cartList.concat(product)
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                products:update
            }
        })
    }

    const remove = (product)=>{
        const remove = state.cartList.filter((item)=>(item.id !== product.id))
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products:remove
            }
        })
    }

   const value={
        cartList:state.cartList,
        total:state.total,
        addtocart,
        remove
    };
    return(
        <CartContext.Provider value={value}>
            {children}
      </CartContext.Provider>
    )

}

export const useCart=()=>{
    const context = useContext(CartContext)
    return context
}

// // state= {
// //     cartList:[],
// //     total:0
// // }

// // dispatch ={}