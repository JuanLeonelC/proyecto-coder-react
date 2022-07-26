import {useState, useEffect} from 'react'
import "./ItemProduct.css";


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
        <div className="item-product">
            <p>{title}</p>
            <span>$ {price}</span>
            <div className='countProd'>
                <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <button onClick={action}>Comprar</button>
        </div> 
    )
}

export default ItemProduct;