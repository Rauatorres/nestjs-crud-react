import { useState } from "react"
import ProductActionsArea from "../product_actions_area/ProductActionsArea"
import ProductField from "../product_field/ProductField";
import ProductFieldEdit from "../product_field_edit/ProductFieldEdit";

import styles from './product.module.css';

const Product = (props: { id: number, name: string, price: number }) => {
    const [ isInEditMode, setIsInEditMode ] = useState(false);
    const [ name, setName ] = useState(props.name);
    const [ price, setPrice ] = useState(props.price);

    function showProductFields(){
        if(!isInEditMode){
            return (
                <>
                    <ProductField class={styles.col1}>{props.name}</ProductField>
                    <ProductField class={styles.col2}>{props.price}</ProductField>
                </>
            );
        }else{
            return (
                <>
                    <ProductFieldEdit class={styles.col1} value={name} setFieldValue={setName} />
                    <ProductFieldEdit class={styles.col2} value={price} setFieldValue={setPrice} />
                </>

            )
        }
    }

    return (
        <div className={styles.product}>
            {showProductFields()}
            <ProductActionsArea 
                class={styles.col3}
                product={{ id: props.id, name: name, price: price }} 
                isInEditMode={isInEditMode} 
                setIsInEditMode={setIsInEditMode} 
            />
        </div>
    );
};

export default Product