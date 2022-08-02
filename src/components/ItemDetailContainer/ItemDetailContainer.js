import { useEffect, useState } from "react";
import ItemDetails from "../ItemDetails/itemDetails";
import products from "../../utils/products.mock";


const ItemDetailContainer = ({section}) => {

    const [listDetails, setListDetails] = useState([])

    const getDetails = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getDetails
            .then( (res) => {
                setListDetails(res)
            })
            .catch( (error) => {
                console.log("la llama fallo")
            })
            .finally( () => {
            })
    }, [])




    return(
        <div>
            <h2>{section}</h2>
            <ItemDetails detailsProducts={listDetails}/>
        </div>
    )
}

export default ItemDetailContainer;