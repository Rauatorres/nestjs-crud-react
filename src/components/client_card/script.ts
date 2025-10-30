function numberToString(value: number | string): string{
    if(typeof value != "string"){
        return `${value}`;
    }else{
        return value;
    }
}

export { numberToString }