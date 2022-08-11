import { useState, useEffect } from "react"
const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const agregarCantidad = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const restarCantidad = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }


    return (
        <div>
                <div>
                    <div>
                        <button onClick={restarCantidad}>-</button>
                    </div>
                        <p>{quantity}</p>
                    <div>
                        <button onClick={agregarCantidad}>+</button>
                    </div>
                    <div>
                        <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
    )
}

export default ItemCount