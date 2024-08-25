export interface IProduct{
    name: string;
    price: number;
    quantity: number;
}

export async function createProduct({name, price, quantity}: IProduct) {
    return {
      name,price,quantity
    };
  }
