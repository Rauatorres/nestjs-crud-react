import axios, { type AxiosResponse } from "axios";

type AddResponse = { 
    identifiers: { id: number }[]; 
    generatedMaps: unknown;
    raw: unknown
};

type UpdateResponse = { 
    affected: number; 
    generatedMaps: unknown;
    raw: unknown
};

type DeleteResponse = {
    raw: unknown;
    affected: number;
}

async function apiRequest<ResponseType>(type: string, path: string, body?: object){
    let req: AxiosResponse;
    switch (type){
        case "get":
            req = await axios.get<ResponseType>("http://localhost:3000/" + path);
            break;
        case "post":
            req = await axios.post<ResponseType>("http://localhost:3000/" + path, body);
            break;
        case "delete":
            req = await axios.delete<ResponseType>("http://localhost:3000/" + path);
            break;
        case "patch":
            req = await axios.patch<ResponseType>("http://localhost:3000/" + path, body);
            break;
        default:
            return [];
    }
    return req.data;
}

async function getOne<Type>(table: string, id: number): Promise<Type>{
    return await apiRequest<Type>("get", `${table}/${id}`);
}

async function getAll<Type>(table: string): Promise<Type[]> {
    return await apiRequest<Type[]>("get", `${table}/all`);
}

async function getMany<Type>(table: string, requisite: string, value: string | number): Promise<Type[]> {
    return await apiRequest<Type[]>("get", `${table}/${requisite}/${value}`);
}

async function add(table: string, body: object) {
    return await apiRequest<AddResponse>("post", `${table}/add`, body);
}

async function del(table: string, id: number){
    return await apiRequest<DeleteResponse>("delete", `${table}/${id}`);
}

async function update(table: string, id: number, body: object) {
    return await apiRequest<UpdateResponse>("patch", `${table}/${id}`, body);
}

async function insertInto(table: string, idMainTableRow: number, insertedTable: string, idInsertedTableRow: number){
    return await apiRequest<UpdateResponse>("patch", `${table}/${idMainTableRow}/add${insertedTable}/${idInsertedTableRow}`);
}

async function removeFrom(table: string, idMainTableRow: number, removedTable: string, idRemovedTableRow: number){
    return await apiRequest<UpdateResponse>("patch", `${table}/${idMainTableRow}/remove${removedTable}/${idRemovedTableRow}`);
}

export { getOne, getAll, add, del, update, getMany, insertInto, removeFrom }
