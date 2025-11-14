import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContex";
import ProductAddButton from "../product_add_button/ProductAddButton";
import ProductListTitleLine from "../product_list_title_line/ProductListTitleLine";
import { getAll } from "../../api/api";
import type { ProductType } from "../../types/product";
import Product from "../product/Product";

import styles from './productList.module.css';

const ProductList = () => {
    const { productList, setProductList, actionCounter } = useContext(ProductContext);

    useEffect(() => {
        async function fetchProducts() {
            const res = await getAll<ProductType>('product');
            setProductList(res);
        }
        fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actionCounter]);

    function showProductList(productList: ProductType[]){
        return productList.map((product: ProductType) => {
            return (
                <Product 
                    key={product.id} 
                    id={product.id}
                    name={product.name} 
                    price={product.price} 
                />
            )
        });
    }

    return (
        <div className={styles.productList}>
            <ProductListTitleLine />
            {showProductList(productList)}
            <ProductAddButton />
        </div>
    );
}

export default ProductList