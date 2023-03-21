export interface Drink {
    id?: string;
    name: string;
    icon: string;
    price: number;
    promo?: 'new' | 'promotion';
    description: string;
}
