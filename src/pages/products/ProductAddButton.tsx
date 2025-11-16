import { MdAdd } from "react-icons/md"
import { useContext } from "react"
import { ProductContext } from "../../context/ProductContex"
import { add } from "../../service/api";

import styles from '../../styles/product/productAddButton.module.css';

async function addProduct(action: () => void){
    const res = await add('product', { name: 'novo produto', price: 0 });
    if(res){
        action();
    }
}

const ProductAddButton = () => {
    const { executeAction } = useContext(ProductContext);

    return (
        <button className={styles.button} onClick={() => addProduct(executeAction)}><MdAdd /></button>
    )
};

export default ProductAddButton