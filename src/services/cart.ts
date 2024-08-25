import { IProduct } from "./product.js";

export async function addProduct(userCart:IProduct[], product:IProduct) {
    userCart.push(product)
}

export async function deleteProduct(userCart:IProduct[], name:string) {
    const index = userCart.findIndex((item) => item.name === name);

   if(index !== -1){
    userCart.splice(index, 1);
   }
}

export async function removeProduct(userCart:IProduct[], product:IProduct){

    const index = userCart.findIndex((p) => p.name === product.name);

    if(index == -1){
        console.log('Product not found');
        return;
    }

    if(userCart[index].quantity > 1){
        userCart[index].quantity -= 1;
        return;
    }

    if(userCart[index].quantity == 1){
        userCart.splice(index, 1);
        return;
    }
}


export async function listAllProductsOnCart(userCart:IProduct[]){
    console.log('Your Cart: \nName | Price | Quantity \n');
    userCart.forEach((product, index) =>{
        console.log(
            `${index + 1} | ${product.name} | USD ${product.price} | ${product.quantity}x | Subtotal =  USD ${product.price * product.quantity} `
        )
    })
}

export async function calculateTotal(userCart: IProduct[]){
    
    const total = userCart.reduce((result, product) => result + (product.price * product.quantity), 0);
    console.log(`\n Shopee Cart Total is: USD ${total.toFixed(2)}`)
}