import { del, update } from "../../api/api"

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

export { deleteProduct, editProduct }