import { useContext, useState } from "react";
import { IoIosRemove } from "react-icons/io";
import { removeFrom } from "../../service/api";
import { OrderContext } from "../../context/OrderContext";

async function removeProduct(id: number, orderId: number){
    await removeFrom('order', orderId, 'product', id);
}

const OrderProduct = (props: { id: number, name: string, price: number, orderId: number }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const { executeAction } = useContext(OrderContext);

    function showColumn(){
        if(isMouseOver){
            return <button onClick={() => {removeProduct(props.id, props.orderId); executeAction()}}><IoIosRemove /></button>
        }else{
            return <div>{props.price}</div>
        }
    }

    return (
        <div onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
            <div>{props.name}</div>
            {showColumn()}
        </div>
    )
}

export default OrderProduct