type Client = {
    id: number,
    name: string,
    age: number
};

type ClientEditModeListType = { id: number, data: {name?: string, age?: number} }[];

export type { Client, ClientEditModeListType }