import { MdOutlinePostAdd } from "react-icons/md";
import { add, getOne } from "../../service/api";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

const ButtonAddOrder = () => {
    const { clientId } = useContext(OrderContext);
    
    async function addOrder(){
        const client = await getOne('client', clientId);
        await add('order', {
            client: client,
            products: []
        });
        console.log('teste');
    }

    return (
        <button onClick={addOrder}>Novo Pedido <MdOutlinePostAdd /></button>
    );
};

export default ButtonAddOrder