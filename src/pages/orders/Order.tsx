import type { Client } from "../../types/client";
import type { ProductType } from "../../types/product";
import ButtonAddProduct from "./ButtonAddProduct";
import ButtonRemoveOrder from "./ButtonRemoveOrder";
import ExpiringDate from "./ExpiringDate";
import OrderProduct from "./OrderProduct";

type OrderProps = {
    id: number;
    client: Client;
    products: ProductType[] | [];
    expiresAt: string;
}

const Order = (props: OrderProps) => {
    function showProductList(){
        return props.products.map(product => {
            return <OrderProduct key={product.id} id={product.id} name={product.name} price={product.price} orderId={props.id}/>
        })
    }

    return (
        <div>
            <div>
                <ExpiringDate expiresAt={props.expiresAt} />
                <ButtonRemoveOrder id={props.id} />
            </div>
            <div>
                {showProductList()}
            </div>
            <ButtonAddProduct orderId={props.id} />
        </div>
    );
};

export default Order