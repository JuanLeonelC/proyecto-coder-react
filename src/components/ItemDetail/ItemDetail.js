import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext)
    const [producto, setProducto] = useState([])

    const onAdd = (contador) => {
        setProducto(product)
        addItem(product, contador)
    }
    return (
        <div className="detail_div">
            <div className="detail_img_div">
                <img src={`/assets/${product.image}`} alt="img"></img>
            </div>
            <div>
            <h1>{product.title}</h1>
            <p>{product.desc}</p>
            {
                producto.id ?
                    <div>
                        <Link to={"/cart"}><button className="btn">Finalizar compra</button></Link>
                    </div> :
                    <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
            }
            </div>
        </div>
    )
}

export default ItemDetail;