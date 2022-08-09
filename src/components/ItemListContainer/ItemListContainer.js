import React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from "../../utils/products.mock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()
    let flag = true;
    const traerProductos = (time, task) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (flag) {
                    resolve(task)
                } else {
                    reject('Error')
                }
            }, time)
        })
    }

    useEffect(() => {
        if (categoryId) {
            traerProductos(1000, products)
                .then((result) => {
                    setProductos(result.filter(products => products.category === categoryId))
                })
        } else {
            traerProductos(1000, products)
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