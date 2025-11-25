import type { Client } from "./client";
import type { ProductType } from "./product";

type OrderType = {
    id: number;
    client: Client;
    products: ProductType[];
    expiresAt: string;
};

export type { OrderType }
