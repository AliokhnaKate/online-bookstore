import {type BookModel} from '../models/BookModel'

interface BookModelCard {
  book: BookModel;
}

function PostBookCard ({book}: BookModelCard) {
  return (
       <div className="book-card">
            <div className="book-image">
                <img src="{book.imageUrl}" alt="Обложка книги"/>
            </div>
            <div className="book-info">
                <div className="book-category">{book.category}</div>
                <h3 className="book-title">{book.title}</h3>
                <div className="book-author">{book.author}</div>
                <div className="book-price">
                    <div className="price">{book.price} руб</div>
                        <button className="add-to-cart">В корзину</button>
                    </div>
                </div>
        </div>
  )
}

export default PostBookCard;