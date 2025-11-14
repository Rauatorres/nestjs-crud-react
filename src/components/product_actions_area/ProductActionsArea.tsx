import { MdModeEditOutline, MdDelete } from "react-icons/md";
import ProductAction from "../product_action/ProductAction";
import { deleteProduct, editProduct } from "./script";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContex";
import { FaCheck } from "react-icons/fa";
import type { ProductType } from "../../types/product";

const ProductActionsArea = (props: { product: ProductType, isInEditMode: boolean, setIsInEditMode: (isInEditMode: boolean) => void }) => {
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
        <div>
            <ProductAction 
                icon={props.isInEditMode ? <FaCheck /> : <MdModeEditOutline />} 
                action={editModeAction} 
            />
            {showDeleteAction(props.isInEditMode)}
        </div>
    );
};

export default ProductActionsArea
