import CartShow from "./CartShow";


function CarItem({ cart }) {
    return (
        <div>
            {cart.map(e => <CartShow key={e.id} items={e}></CartShow>)}
        </div>
    )
}

export default CarItem;