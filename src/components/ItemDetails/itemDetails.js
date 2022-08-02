const ItemDetails = ({detailsProducts}) => {
    return(
        <div>
            {detailsProducts.map( (product) => {
                return (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>Vale: {product.price}</p>
                        <p>Tenemos: {product.stock}</p>
                        <p>Un Poco mas sobre el producto: {product.description}</p>
                        </div>)
            })}
        </div>
    )
}

export default ItemDetails