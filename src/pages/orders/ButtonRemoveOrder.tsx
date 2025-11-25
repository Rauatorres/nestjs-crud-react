import { MdDelete } from "react-icons/md";
import { del } from "../../service/api";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

async function removeOrder(id: number, executeAction: () => void){
    const removeOrderApi = await del('order', id);
    executeAction();
}

const ButtonRemoveOrder = (props: { id: number }) => {
    const { executeAction } = useContext(OrderContext);

    return (
        <button onClick={() => removeOrder(props.id, executeAction)}><MdDelete /></button>
    );
};

export default ButtonRemoveOrder