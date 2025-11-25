import type { Client } from "../../types/client";
import type { ProductType } from "../../types/product";
import ButtonAddProduct from "./ButtonAddProduct";
import ExpiringDate from "./ExpiringDate";

type OrderProps = {
    id: number;
    client: Client;
    products: ProductType[] | [];
    expiresAt: string;
}

const Order = (props: OrderProps) => {
    return (
        <div>
            <div>{props.id}</div>
            <ExpiringDate expiresAt={props.expiresAt} />
            <ButtonAddProduct orderId={props.id} />
        </div>
    );
};

export default Order