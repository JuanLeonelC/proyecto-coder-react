import CartShow from "./CartShow";


function CarItem({ cart }) {
    return (
        <>
            {cart.map(e => <CartShow key={e.id} items={e}></CartShow>)}
        </>
    )
}

export default CarItem;