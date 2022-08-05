import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from 'react-router-dom'
import "./ItemDetail.css"

const ItemDetail = ({data}) => {
    const [quantitySelected, setQuantitySelected] = useState(0)

    const {title, image, price, stock, description} = data
    return (
        <div className="DetailDiv">
            <div className="DetailImg">
                <img src={`/assets/${image}`} alt={title} />
            </div>
            <div className="DetailInfo">
                <h1>{title}</h1>
                <p>{price}</p>
                <p>{description}</p>
                {
        quantitySelected > 0 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> : <ItemCount setQuantitySelected={setQuantitySelected}/>
    }
                <Link to="/cart">
                </Link>
            </div>
        </div>

        )}

export default ItemDetail