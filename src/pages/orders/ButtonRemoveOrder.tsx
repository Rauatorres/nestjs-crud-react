import { MdDelete } from "react-icons/md";
import { del } from "../../service/api";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

import styles from '../../styles/orders/ButtonRemoveOrder.module.css';

async function removeOrder(id: number, executeAction: () => void){
    await del('order', id);
    executeAction();
}

const ButtonRemoveOrder = (props: { id: number }) => {
    const { executeAction } = useContext(OrderContext);

    return (
        <button className={styles.button} onClick={() => removeOrder(props.id, executeAction)}><MdDelete /></button>
    );
};

export default ButtonRemoveOrder