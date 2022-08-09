import { useContext } from "react"
import { CartContext } from "../../context/CartContext";


function CartShow({ items }) {
    const { removeItem } = useContext(CartContext);
    const QuitarItem = () => {
        removeItem(items.id);
    }
    return (
        <div>
            <img src={items.image}></img>
            <div>
                <h5>{items.title}</h5>
                <p>{items.price}</p>
                <button onClick={QuitarItem}>Quitar</button>
            </div>
        </div>
    )
}






export default CartShow