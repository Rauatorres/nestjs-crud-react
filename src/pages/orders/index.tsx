import Page from "../../components/page/Page";
import { OrderContextWrapper } from "../../context/OrderContext";
import OrderList from "./OrderList";

const OrderPage = () => {
    return (
        <Page currentPage="clientes" pageTitle="Pedidos">
            <OrderContextWrapper>
                <OrderList />
            </OrderContextWrapper>
        </Page>
    )
};

export default OrderPage;