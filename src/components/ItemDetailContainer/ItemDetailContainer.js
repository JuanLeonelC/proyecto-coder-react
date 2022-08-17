import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import db from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState({})
    const {id} = useParams()
    let flag = true;
    const traerProductos = async () => {
        const docRef = doc(db, 'productos', id);
        const productosSnapshot = await getDoc(docRef);
        const product = productosSnapshot.data();
        product.id = productosSnapshot.id;
        return product
    }




    useEffect(() => {
        traerProductos()
            .then((res) => {
                setProductos(res)
                console.log(res)
            }
            )
    } , [])
    return (
        <ItemDetail product={productos}/>
    )

}

export default ItemDetailContainer;