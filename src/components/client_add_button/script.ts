import React from "react";
import type { Client } from "../../types/client";
import axios from "axios";

type AddClientResponse = { 
    identifiers: { id: number }[]; 
    generatedMaps: unknown;
    raw: unknown
};

async function addClientToList(clientList: Client[], setter: React.Dispatch<React.SetStateAction<Client[]>>){
    const req = await axios.post<AddClientResponse>("http://localhost:3000/client/add", {
        name: "novo cliente",
        age: 0
    });
    const res = req.data;
    const clientId = res.identifiers[0].id;
    setter([...clientList, { id: clientId, name: "novo cliente", age: 0 }]);
}

export { addClientToList }