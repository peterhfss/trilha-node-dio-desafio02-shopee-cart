import { addProduct, calculateTotal, deleteProduct, listAllProductsOnCart, removeProduct } from "./services/cart.js";
import { createProduct, IProduct } from "./services/product.js"

console.log("Welcome to the your Shopee Cart! \n ")

const myCart: IProduct[] = []

// create products
const product01:IProduct = await createProduct({name:"hotwheels ferrari", price:20.99,quantity: 1});
const product02:IProduct = await createProduct({name:"capa para tablet", price:39.99,quantity: 3});
const product03:IProduct = await createProduct({name:"camisa social", price:19.99,quantity: 6});

// add products to cart
await addProduct(myCart, product01);
await addProduct(myCart,product02);
await addProduct(myCart,product03);

// remove a product by the name
await deleteProduct(myCart,product02.name);

// remove a quantity of product
//await removeProduct(myCart, product03);
await removeProduct(myCart, product03);

// list all products on the cart
await listAllProductsOnCart(myCart);

// show value total of all products on the cart
await calculateTotal(myCart);