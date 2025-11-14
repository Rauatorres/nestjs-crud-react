import { useState } from "react"
import ProductActionsArea from "../product_actions_area/ProductActionsArea"
import ProductField from "../product_field/ProductField";
import ProductFieldEdit from "../product_field_edit/ProductFieldEdit";

const Product = (props: { id: number, name: string, price: number }) => {
    const [ isInEditMode, setIsInEditMode ] = useState(false);
    const [ name, setName ] = useState(props.name);
    const [ price, setPrice ] = useState(props.price);

    function showProductFields(){
        if(!isInEditMode){
            return (
                <>
                    <ProductField>{props.name}</ProductField>
                    <ProductField>{props.price}</ProductField>
                </>
            );
        }else{
            return (
                <>
                    <ProductFieldEdit value={name} setFieldValue={setName} />
                    <ProductFieldEdit value={price} setFieldValue={setPrice} />
                </>

            )
        }
    }

    return (
        <div>
            {showProductFields()}
            <ProductActionsArea 
                product={{ id: props.id, name: name, price: price }} 
                isInEditMode={isInEditMode} 
                setIsInEditMode={setIsInEditMode} 
            />
        </div>
    );
};

export default Product