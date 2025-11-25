import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import type { ProductType } from "../../types/product";
import { getAll, insertInto } from "../../service/api";
import { OrderContext } from "../../context/OrderContext";

function addProduct(executeAction: () => void, setIsInAddMode: ((isInAddMode: boolean) => void), selectedProduct: number, orderId: number){
    const addProductToOrderApi = async () => {
        await insertInto('order', orderId, 'product', selectedProduct);
    };
    if(selectedProduct != 0) {
        addProductToOrderApi();
        executeAction();
    }
    setIsInAddMode(false);
}

const ButtonAddProduct = (props: { orderId: number }) => {
    const [isInAddMode, setIsInAddMode] = useState(false);
    const [productList, setProductList] = useState<ProductType[]>([]);
    const [selectedProduct, setSelectedProduct] = useState(0);

    const { executeAction } = useContext(OrderContext);

    useEffect(() => {
        async function apiGetProductList(){
            const productList = await getAll<ProductType>('product');
            setProductList(productList);
        }
        apiGetProductList();
    }, []);

    function showProductList(productList: ProductType[]){
        return productList.map(product => {
            return (
                <option value={product.id} key={product.id}>{product.name}</option>
            )
        })
    }

    if(isInAddMode){
        return (
            <div>
                <select onChange={ e => setSelectedProduct(+(e.target.value)) } defaultValue={selectedProduct}>
                    <option value={0}>nenhum</option>
                    {showProductList(productList)}
                </select> 
                <button onClick={() => addProduct(executeAction, setIsInAddMode, selectedProduct, props.orderId)}><FaCheck /></button>
            </div>
        )
    }else{
        return(
            <button onClick={() => setIsInAddMode(true)}>adicionar produto <IoMdAdd /></button>
        )
    }
};

export default ButtonAddProduct