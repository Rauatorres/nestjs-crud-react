import React from "react";
import type { Client } from "../../types/client";
import { add } from "../../api/api";

async function addClientToList(clientList: Client[], setter: React.Dispatch<React.SetStateAction<Client[]>>){
    const res = await add("client", { name: "novo cliente", age: 0 });
    const clientId = res.identifiers[0].id;
    setter([...clientList, { id: clientId, name: "novo cliente", age: 0 }]);
}

export { addClientToList }