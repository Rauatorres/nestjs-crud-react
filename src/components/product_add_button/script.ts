import { add } from "../../api/api"

async function addProduct(action: () => void){
    const res = await add('product', { name: 'novo produto', price: 0 });
    if(res){
        action();
    }
}

export { addProduct }