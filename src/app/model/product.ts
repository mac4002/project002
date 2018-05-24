export class Product  {
    id: number;
    name: string;
    description: string;

    constructor(id: number, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

export const NEW_PRODUCT = new Product(1, 'voiture1', 'Pour conduire');
export const TAB_PRODUCT: Product [] = [
    new Product(2, 'voiture2', 'Pour conduire'),
   /*  new Product(2, 'voiture2', 'Pour conduire'),
    new Product(2, 'voiture2', 'Pour conduire'),
    new Product(2, 'voiture2', 'Pour conduire'),
    new Product(2, 'voiture2', 'Pour conduire'),
    new Product(2, 'voiture2', 'Pour conduire'), */
    new Product(3, 'voiture3', 'Pour conduire'),
    new Product(4, 'voiture4', 'Pour conduire'),
    new Product(5, 'voiture5', 'Pour conduire'),
];

