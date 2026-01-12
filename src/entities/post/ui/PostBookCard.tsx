import {type BookModel} from '../models/BookModel'
import styles from '../../../App.module.css';
import {CommentList} from '../../../widgets/CommentList/ui/CommentList';

interface BookModelCard {
  book: BookModel;
}

function PostBookCard ({book}: BookModelCard) {
  
  return (
    <div className={styles.bookCard}>
      <div className={styles.bookImage}>
        <img src={book.imageUrl} alt="Обложка книги"/>
      </div>
      <div className={styles.bookInfo}>
        <h3 className={styles.bookTitle}>{book.title}</h3>
        <div className={styles.bookAuthor}>{book.author}</div>
        <CommentList collapseComment={'свернуть'} expandComment={'развернуть'} hidden={true}>
          <div className={styles.description}>{book.description}</div>
        </CommentList>
        <div className={styles.bookPrice}>
          <div className={styles.price}>{book.price}</div>
          <button className={styles.addToCart}>В корзину</button>
        </div>
      </div>
    </div>
    )
}

export default PostBookCard;