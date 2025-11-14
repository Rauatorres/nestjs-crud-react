import { MdAdd } from "react-icons/md"
import { addProduct } from "./script"
import { useContext } from "react"
import { ProductContext } from "../../context/ProductContex"

const ProductAddButton = () => {
    const { executeAction } = useContext(ProductContext)

    return (
        <button onClick={() => addProduct(executeAction)}><MdAdd /></button>
    )
}

export default ProductAddButton