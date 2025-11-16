import { MdAdd } from "react-icons/md"
import { useContext } from "react"
import { ProductContext } from "../../context/ProductContex"
import { add } from "../../service/api";

async function addProduct(action: () => void){
    const res = await add('product', { name: 'novo produto', price: 0 });
    if(res){
        action();
    }
}

const ProductAddButton = () => {
    const { executeAction } = useContext(ProductContext)

    return (
        <button onClick={() => addProduct(executeAction)}><MdAdd /></button>
    )
}

export default ProductAddButton