import { MdOutlinePostAdd } from "react-icons/md";
import { add, getOne } from "../../service/api";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

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
        <button onClick={() => addOrder(clientId, executeAction)}>Novo Pedido <MdOutlinePostAdd /></button>
    );
};

export default ButtonAddOrder