import {useState} from "react";
// import {recommended} from "../../constants/constants";
// import type {BookModel} from "../../../entities/post/models/BookModel";

import type {BookModel} from "../../../entities/post/models/BookModel"

export const addToCartButton = (event: React.MouseEvent<HTMLButtonElement>, book: BookModel) => {

    // const [books] = useState<BookModel[]>(recommended);
    const [cartItems, setCartItems] = useState<BookModel[]>([]); //массив товаров в корзине
    console.log(cartItems)
     // Добавляем новый товар в массив корзины

        setCartItems(prevItems => [...prevItems, book])
     
        console.log(book)
        console.log(cartItems)
        console.log(event)
    //     setIsAdded(true);
    //     setCardCount(prev => prev +1);
    //     setIsAdded(false)
}
