function ProductFieldEdit<T extends string | number>(props: { value: string | number, setFieldValue: React.Dispatch<React.SetStateAction<T>>, class: string}){

    let inputType: string;

    if(typeof props.value == 'number'){
        inputType = 'number';
    }else{
        inputType = 'text';
    }

    return (
        <input className={props.class} type={inputType} value={props.value} onChange={e => props.setFieldValue(e.target.value as T)} />
    )
}

export default ProductFieldEdit