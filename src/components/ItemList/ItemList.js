import ItemProduct from "../ItemProduct/ItemProduct"
import React from "react"

const ItemList = ({products}) => {
    return(
        <>
            {products.map(producto => {
            return <ItemProduct key={producto.id} producto={producto} />}
            )}
        </>
    )
}

export default ItemList