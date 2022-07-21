import ItemProduct from '../ItemProduct/ItemProduct';

const ItemListContainer = () => {
    return(
        // Fragment
        <div className='products'>
            <ItemProduct title="Campera Invierno" price={15000}/>
            <ItemProduct title="Remera" price={3400}/>
        </div>
    )
}

export default ItemListContainer;