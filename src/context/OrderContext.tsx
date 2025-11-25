import { createContext, useState, type ReactNode } from "react";
import { useParams } from "react-router";
import type { OrderType } from "../types/order";

type OrderContextValue = {
    clientId: number;
    orderList: OrderType[];
    setOrderList: (orderList: OrderType[]) => void;
    actionCounter: number;
    executeAction: () => void;
}

const defaultValue: OrderContextValue = {
    clientId: 0,
    orderList: [],
    setOrderList: () => {},
    actionCounter: 0,
    executeAction: () => {},
}

const OrderContext = createContext(defaultValue);

const OrderContextWrapper = (props: { children: ReactNode }) => {
    const params = useParams();
    let clientId: string | number | undefined = params.clientId;

    const [orderList, setOrderList] = useState<OrderType[]>([]);
    const [actionCounter, setActionCounter] = useState(0);

    function executeAction(){
        setActionCounter(actionCounter + 1);
    }

    if(clientId == undefined){
        clientId = 0;
    }
    clientId = +clientId;

    return (
        <OrderContext.Provider value={{ clientId, orderList, setOrderList, actionCounter, executeAction }}>
            {props.children}
        </OrderContext.Provider>
    )
};

export { OrderContext, OrderContextWrapper }
