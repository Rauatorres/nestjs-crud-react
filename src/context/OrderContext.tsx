import { createContext, type ReactNode } from "react";
import { useParams } from "react-router";

type OrderContextValue = {
    clientId: number;
}

const defaultValue: OrderContextValue = {
    clientId: 0
}

const OrderContext = createContext(defaultValue);

const OrderContextWrapper = (props: { children: ReactNode }) => {
    const params = useParams();
    let clientId: string | number | undefined = params.clientId;
    if(clientId == undefined){
        clientId = 0;
    }
    clientId = +clientId;

    return (
        <OrderContext.Provider value={{ clientId }}>
            {props.children}
        </OrderContext.Provider>
    )
};

export { OrderContext, OrderContextWrapper }