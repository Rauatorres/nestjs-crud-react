import Page from "../../components/page/Page";
import ProductList from "./ProductList";
import { ProductContextWrapper } from "../../context/ProductContex";

const ProductsPage = () => {
    return (
        <Page currentPage="produtos" pageTitle="Produtos" >
            <ProductContextWrapper>
                <ProductList />
            </ProductContextWrapper>
        </Page>
    )
};

export default ProductsPage;