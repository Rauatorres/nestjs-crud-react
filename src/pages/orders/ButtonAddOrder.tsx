import { MdOutlinePostAdd } from "react-icons/md";
import { add, getOne } from "../../service/api";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

import styles from '../../styles/orders/ButtonAddOrder.module.css';

const ButtonAddOrder = () => {
    const { clientId, executeAction } = useContext(OrderContext);
    
    async function addOrder(clientIdParam: number, action: () => void){
        const client = await getOne('client', clientIdParam);
        await add('order', {
            client: client,
            products: [],
        });
        action();
    }

    return (
        <button className={styles.button} onClick={() => addOrder(clientId, executeAction)}>Novo Pedido <MdOutlinePostAdd className={styles.icon} /></button>
    );
};

export default ButtonAddOrder