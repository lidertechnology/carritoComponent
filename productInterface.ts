
// src/app/interfaces/product.interface.ts
export interface Product {
    id?: string;
    title: string;
    description: string;
    link: string;
    imageLink: string;
    price: number;
    availability: string;
    condition: string;
    gtin?: string;
    brand: string;
    googleProductCategory: string;
    productType: string;
    salePrice?: number;
    size?: string;
    color?: string;
    material?: string;
    creationDate?: Date;
    lastUpdate?: Date;
}
