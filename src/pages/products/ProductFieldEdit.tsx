import styles from '../../styles/product/productFieldEdit.module.css';

function ProductFieldEdit<T extends string | number>(props: { value: string | number, setFieldValue: React.Dispatch<React.SetStateAction<T>>, class: string}){
    let columnStyle: string;
    if(props.class == "col1"){
        columnStyle = styles.col1;
    }else{
        columnStyle = styles.col2;
    }
    
    let inputType: string;
    if(typeof props.value == 'number'){
        inputType = 'number';
    }else{
        inputType = 'text';
    }

    return (
        <input className={`${styles.field} ${columnStyle}`} type={inputType} value={props.value} onChange={e => props.setFieldValue(e.target.value as T)} />
    )
}

export default ProductFieldEdit