import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../context/OrderContext";
import type { OrderType } from "../../types/order";
import { getMany } from "../../service/api";
import ClientName from "./ClientName";
import ButtonAddOrder from "./ButtonAddOrder";
import Order from "./Order";

const OrderList = () => {
    const { clientId } = useContext(OrderContext);

    const [orderList, setOrderList] = useState<OrderType[] | []>([]);

    useEffect(() => {
        async function getOrders(){
            const apiGetOrders = await getMany<OrderType>('order', 'client', clientId);
            setOrderList(apiGetOrders);
        }
        getOrders()
    }, []);

    function showOrders(){
        return orderList.map(order => {
            return (
                <Order key={order.id} id={order.id} client={order.client} products={order.products} expiresAt={order.expiresAt} />
            );
        });
    }

    return (
        <div>
            <ClientName/>
            <div>
                {showOrders()}
            </div>
            <ButtonAddOrder />
        </div>
    )
};

export default OrderList
