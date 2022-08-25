import "./modal.scss"
import { Close } from "@mui/icons-material"

const Modal = ({title, close, children}) => {
    return(
        <div>
            <h2>{title}</h2>
            <Close onClick={() => close(false)}/>
            {children}
        </div>
    )
}

export default Modal