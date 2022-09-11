import MenuItem, { imageListClasses, ListItemSecondaryAction } from '@mui/material';
import { Menu } from '@mui/material';
import { useContext, useState } from 'react';
import { CartContext } from "../../context/CartContext"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

const CartWidget = () =>{
    const [anchorEl, setAnchorEl] = useState(null);

    const {cart, clear, totalPrice, removeItem, total} = useContext(CartContext)

    const open = Boolean(anchorEl);
    const handleClick  = (event) =>{
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () =>{
        setAnchorEl(null);
    }

    return(
      <div>
        {cart.lenght !== 0 && <p>{totalPrice}</p>}
        <ShoppingCartIcon 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {cart.map ((items) => {
                  return (
                    <div>
                      <img src={items.image}></img>
                    <div>
                      <p>{items.title}</p>
                    </div>
                    <div>
                      <p>{items.totalPrice}</p>
                    </div>
                    <div>
                    <DeleteIcon onClick={() => removeItem(items)}/>
                    </div>
                  </div>
                  )

                })}
                <button onClick={() => clear()}>Borrar todo</button>
        </Menu>
      </div>
    )



}
export default CartWidget