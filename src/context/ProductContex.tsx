import { createContext, useState, type ReactNode } from "react";
import type { ProductType } from "../types/product";

type DefaultValueType = {
    productList: ProductType[];
    setProductList: (productList: ProductType[]) => void;
    actionCounter: number;
    executeAction: () => void;
};

const defaultValue: DefaultValueType = {
    productList: [],
    setProductList: () => {},
    actionCounter: 0,
    executeAction: () => {}
};
const ProductContext = createContext(defaultValue);

const ProductContextWrapper = (props: { children: ReactNode }) => {
    const [ productList, setProductList ] = useState<ProductType[]>([]);
    const [ actionCounter, setActionCounter ] = useState(0);

    function executeAction(){
        setActionCounter(actionCounter + 1);
    }

    return (
        <ProductContext.Provider value={{ productList, setProductList, actionCounter, executeAction }} >{props.children}</ProductContext.Provider>
    )
}

export { ProductContext, ProductContextWrapper }