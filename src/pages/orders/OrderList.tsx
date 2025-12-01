import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../context/OrderContext";
import type { OrderType } from "../../types/order";
import { getMany } from "../../service/api";
import ClientName from "./ClientName";
import ButtonAddOrder from "./ButtonAddOrder";
import Order from "./Order";

import styles from '../../styles/orders/OrderList.module.css';

const OrderList = () => {
    const { clientId, orderList, setOrderList, actionCounter } = useContext(OrderContext);


    useEffect(() => {
        async function getOrders(){
            const apiGetOrders = await getMany<OrderType>('order', 'client', clientId);
            setOrderList(apiGetOrders);
        }
        getOrders()
    }, [actionCounter]);

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
            <div className={styles.orderList}>
                {showOrders()}
            </div>
            <ButtonAddOrder />
        </div>
    )
};

export default OrderList
