import "./ItemProduct.css";

const ItemProduct = ({title,price}) => {
    return(
        // Fragment
        <div className='item-product'>
            <p>{title}</p>
            <span>$ {price}</span>
            <button>Comprar</button>
        </div>
    )
}

export default ItemProduct;