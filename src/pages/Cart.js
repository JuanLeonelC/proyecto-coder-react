import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import Modal from "../components/modal/Modal";
import db from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore"

function Cart() {

    const { cart, clear, totalPrice } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState();

    const [order, setOrder] = useState({
        items: cart.map((producto) => {
            return {
                id: producto.id,
                title: producto.title,
                price: producto.price,
            };
        }),
        buyer: {},
        total: totalPrice
    })

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitData = (e) => {
        e.preventDefault()
        pushData({...order,buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log('ORDEN GENERADA', orderDoc)
    }


    const limpiarCarrito = () => {
        clear();
    }

    if (!cart.length) {
        return (
            <div>
                <h1>Carrito vacio</h1>
                <Link to="/">
                    <button>Volver al inicio</button>
                </Link>
            </div>
        )
    }

    return (
        <div>
            {console.log(order)}
            <div>
                <CartItem cart={cart} />
            </div>
            <div>
                <h4>$ {totalPrice}</h4>
            </div>
            <div>
                <button onClick={limpiarCarrito}>Vaciar carrito</button>
                <button onClick={() => setShowModal(true)}>Ir a pagar</button>
            </div>
            {showModal &&
                <Modal title="DATOS DE CONTACTO" close={() => setShowModal()}>
                    {success ? (
                        <>
                            <h2>Su orden se genero correctamente</h2>
                            <p>ID de compra : {success}</p>
                        </>
                    ) : (
                        <form onSubmit={submitData}>
                            <input
                                type='text'
                                name='name'
                                placeholder='Ingrese el nombre'
                                onChange={handleChange}
                                value={formData.name}
                            />
                            <input
                                type='number'
                                name='phone'
                                placeholder='Ingrese el telefono'
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <input
                                type='email'
                                name='email'
                                placeholder='Ingrese el mail'
                                value={formData.email}
                                onChange={handleChange}

                            />
                            <button type="submit">Enviar</button>
                        </form>
                    )}
                </Modal>
            }
        </div>
    )
}

export default Cart