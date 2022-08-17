import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import db from "../../firebaseConfig"
import { collection, getDocs } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()
    let flag = true;
    const traerProductos = async () => {
        const productosCollection = collection(db, "productos");
        const productosSnapshot = await getDocs(productosCollection);
        const productsList = productosSnapshot.docs.map( (doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
    })
        return productsList

}

useEffect(() => {
    if (categoryId) {
        traerProductos()
            .then((result) => {
                setProductos(result.filter(products => products.category === categoryId))
            })
    } else {
        traerProductos()
            .then((result) => {
                setProductos(result)
            }
            )
    }
}, [categoryId])

    return (
        <div className='MainDiv'>
            <h1> {greeting} </h1>
            <ItemList products={productos} />
        </div>
    )
}

export default ItemListContainer