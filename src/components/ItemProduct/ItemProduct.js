import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import React from 'react'
import "./ItemProduct.css"


const ItemProduct = ({producto}) => {
    return(
        <div className='ProductsDiv'>
            <p>{producto.title}</p>
            <img src={`/assets/${producto.image}`} alt={producto.title} />
            <span>{producto.price}</span>
            <Link to={`/detalle/${producto.id}`}>
            <button className="BuyButton">Saber mas</button>
            </Link>
            <ItemCount stock={producto.stock} />
        </div>
    )
}

export default ItemProduct;