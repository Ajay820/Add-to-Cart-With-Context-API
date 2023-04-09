export const CartReducer = (state,action)=>{
    const {type,payload} = action

    switch(type){
        case "ADD_TO_CART":
            return{...state,cartList:payload.products}
        case "REMOVE_FROM_CART":
            return{...state,cartList:payload.products};
        default:
            return "nothing can be done with this"
    }
}