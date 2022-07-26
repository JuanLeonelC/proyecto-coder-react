import ItemProduct from '../ItemProduct/ItemProduct';


const ItemListContainer = ({section}) => {
    const product1 = {
        title: "Campera Invierno",
        price: 15000,
        stock: 6
    }
    const product2 = {
        title: "Remera",
        price: 34000,
        stock: 10
    }

    const handleSubmit = () => {console.log("Envio de info")}

    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProduct data={product1} action={handleSubmit}/>
            <ItemProduct data={product2}/>
        </div>
    )
}

export default ItemListContainer;