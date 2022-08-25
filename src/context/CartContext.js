import React from "react";
import { createContext } from "react";


const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const [totalPrice, setTotalPrice] = React.useState(0);

    const getId = (id) => cart.find(e => e.id === id) || null;

    const addItem =  (newItem, qty) => {
        const producto = getId(newItem.id);
        if(!producto){
            newItem.qty = qty;
            setCart([...cart, newItem]);
            console.log(newItem.price);
            setTotalPrice(newItem.price + totalPrice);
        } else {
            if (producto.qty + qty > producto.stock)
            return false;
            producto.qty += qty;

        }
        setTotal(total+qty);
        return true
    }
    
    const removeItem = (id) => {
        const result = cart.filter(el => el.id !== id);
        setCart(result)
        setTotalPrice(totalPrice - result.price)
    }
    
    const clear = () => {
        setCart([]);
        setTotal(0);
    }

    const isIncart = (producto) => getId(producto.id)? true : false

    return (
        <CartContext.Provider value={{ cart, total,totalPrice, addItem, removeItem, clear, isIncart, getId }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext}
export default CartProvider;