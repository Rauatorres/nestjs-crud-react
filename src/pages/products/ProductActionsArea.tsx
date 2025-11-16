import { MdModeEditOutline, MdDelete } from "react-icons/md";
import ProductAction from "./ProductAction";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContex";
import { FaCheck } from "react-icons/fa";
import type { ProductType } from "../../types/product";
import { del, update } from "../../service/api";

async function deleteProduct(id: number, action: () => void){
    const res = await del('product', id);
    if(res) {
        action();
    }
}

async function editProduct(id: number, data: { name?: string, price?: number }, action: () => void){
    const res = await update('product', id, data);
    if(res){
        action();
    }
}

const ProductActionsArea = (props: { product: ProductType, isInEditMode: boolean, setIsInEditMode: (isInEditMode: boolean) => void, class: string }) => {
    const { executeAction } = useContext(ProductContext);
    const { id, name, price } = props.product;


    function showDeleteAction(isInEditMode: boolean){
        if(!isInEditMode){
            return (
                <ProductAction icon={<MdDelete/>} action={() => deleteProduct(id, executeAction)} />
            )
        }
    }

    function editModeAction(){
        if(props.isInEditMode){
            editProduct(id, { name: name, price: price }, executeAction);
        }
        props.setIsInEditMode(!props.isInEditMode);
    }

    return (
        <div className={props.class}>
            <ProductAction 
                icon={props.isInEditMode ? <FaCheck /> : <MdModeEditOutline />} 
                action={editModeAction} 
            />
            {showDeleteAction(props.isInEditMode)}
        </div>
    );
};

export default ProductActionsArea
