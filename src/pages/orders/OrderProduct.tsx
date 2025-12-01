import { useContext, useState } from "react";
import { IoIosRemove } from "react-icons/io";
import { removeFrom } from "../../service/api";
import { OrderContext } from "../../context/OrderContext";

import styles from '../../styles/orders/OrderProduct.module.css';

type OrderProductProps = { 
    id: number, 
    name: string, 
    price: number, 
    orderId: number 
};

async function removeProduct(id: number, orderId: number, executeAction: () => void){
    await removeFrom('order', orderId, 'product', id);
    executeAction();
}

const OrderProduct = (props: OrderProductProps) => {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const { executeAction } = useContext(OrderContext);

    function showColumn(){
        if(isMouseOver){
            return <button className={styles.removeButton} onClick={() => {removeProduct(props.id, props.orderId, executeAction)}}><IoIosRemove /></button>
        }else{
            return <div>{props.price}</div>
        }
    }

    return (
        <div className={styles.product} onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
            <div className={styles.productName}>{props.name}</div>
            {showColumn()}
        </div>
    )
}

export default OrderProduct