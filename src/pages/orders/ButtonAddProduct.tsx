import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import type { ProductType } from "../../types/product";
import { getAll } from "../../service/api";

function showContent(isInAddMode: boolean, setIsInAddMode: Function, productList: ProductType[]){
    if(isInAddMode){
        return (
            <div>
                <select>
                    <option value=""></option>
                    {showProductList(productList)}
                </select> 
                <button onClick={() => setIsInAddMode(false)}><FaCheck /></button>
            </div>
        )
    }else{
        return(
            <button onClick={() => setIsInAddMode(true)}>adicionar produto <IoMdAdd /></button>
        )
    }
}

function showProductList(productList: ProductType[]){
    return productList.map(product => {
        return (
            <option key={product.id} value={product.id}>{product.name}</option>
        )
    })
}

const ButtonAddProduct = (_props: { orderId: number }) => {
    const [isInAddMode, setIsInAddMode] = useState(false);
    const [productList, setProductList] = useState<ProductType[]>([]);

    useEffect(() => {
        async function apiGetProductList(){
            const productList = await getAll<ProductType>('product');
            setProductList(productList);
        }
        apiGetProductList();
    }, [])

    return (
        <>
            {showContent(isInAddMode, setIsInAddMode, productList)}
        </>
    );
};

export default ButtonAddProduct