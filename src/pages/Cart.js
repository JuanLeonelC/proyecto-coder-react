import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";

function Cart() {

    const { cart, clear } = useContext(CartContext);

    const limpiarCarrito = () => {
        clear();

    }

    if (!cart.length) {
        return (
            <div>
                <h1>Carrito vacio</h1>
                <Link to="/">
                    <button>Volver al inicio</button>
                </Link>
            </div>
        )
    }

    return (
        <div>
            <div>
            <CartItem cart={cart} />
            </div>
            <button onClick={limpiarCarrito}>Vaciar carrito</button>
        </div>
    )
}

export default Cart