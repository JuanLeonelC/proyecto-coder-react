import {useState, useEffect} from 'react'
import "./ItemProduct.css";
import { Link } from 'react-router-dom'

const ItemProduct = ({data, action}) => {
    const [contador, setContador] = useState(1)

    const {title, image, price, stock} = data

    const addNumber = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    const removeNumber = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }
    
    useEffect( () => {
    }, [contador])


    return(
        <div className='ProductsDiv'>
            <p>{title}</p>
            <img src={`/assets/${image}`} alt="imagen" />
            <span>$ {price}</span>
            <Link to={`/product/${data.id}`}>
            <button onClick={action} className='BuyButton'>Saber Mas</button>
            </Link>
        </div>

    )
}

export default ItemProduct;