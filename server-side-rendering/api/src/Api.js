import { BehaviorSubject } from "rxjs";

export const cart$ = new BehaviorSubject({products:[], total: 0});

const cart = new Map();
const products = new Map();

export const loadCartData = () => {
    const localCart = localStorage.getItem('cart');
    if(localCart)
        cart$.next(JSON.parse(localCart))
}

export const addToCart = (addedProduct) => {
    const product = products.get(addedProduct.id);
    if(!product) {
        products.set(addedProduct.id, addedProduct);
    }
    const cartProductQuantity = cart.get(addedProduct.id);
    if(!cartProductQuantity) {
        cart.set(addedProduct.id, 1);
    } else {
        cart.set(addedProduct.id, cartProductQuantity+1);
    }
    cart$.next(getCartData());
}

export const removeFromCart = (removedProduct) => {
    const cartProductQuantity = cart.get(removedProduct.id);
    if(!!cartProductQuantity) {
        if(cartProductQuantity > 1) {
            cart.set(removedProduct.id, cartProductQuantity-1);
        } else {
            cart.delete(removedProduct.id);
            products.delete(removedProduct.id);
        }
    }
    cart$.next(getCartData());
}

const getCartData = () => {
    let total = 0;
    const cartPrducts = Array.from(cart.entries()).map(([id, quantity]) => {
        const product = products.get(id);
        total += product.price * quantity;
        return {
            name: product.name,
            image: product.image,
            price: product.price,
            quantity
        }
    })
    const data = {
        products: cartPrducts,
        total: Number(total.toFixed(2))
    }
    localStorage.setItem('cart', JSON.stringify(data));
    return data;
}
