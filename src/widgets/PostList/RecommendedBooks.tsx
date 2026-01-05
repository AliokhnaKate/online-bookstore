import PostBookCard from "../../entities/post/ui/PostBookCard";
import styles from '../../App.module.css';
import {recommended} from "../../shared/constants/constants";
// import type {BookModel} from "../../entities/post/models/BookModel";

function RecommendedBooks () {
  // const recommended = [
  //   {id: 'Alice', imageUrl: '../../../public/alica.webp', title: 'Алиса в Стране чудес', author: 'Льюис Кэрролл', price: parseInt('30 руб')},
  //   {id: 'Little prince', imageUrl: '../../../public/мален принц.webp', title: 'Маленький принц', author: 'А. де Сент-Экзюпери', price: parseInt('15 руб')},
  //   {id: 'Harry Potter', imageUrl: '../../../public/гарри поттер.webp', title: 'Гарри Поттер', author: 'Дж. Роулинг', price: parseInt('52 руб')},
  //   {id: 'Green Mile', imageUrl: '../../../public/зеленая миля.webp', title: 'Зеленая миля', author: 'С. Кинг', price: parseInt('18 руб')},
  //   {id: 'Lord of the Rings', imageUrl: '../../../public/властелин колец.webp', title: 'Властелин колец', author: 'Дж. Р.Р. Толкин', price: parseInt('25 руб')}
  // ]

  
  return (
    <>
      <div className={styles.bookList}>
        <h2>Рекомендуемые книги</h2>
        {recommended.map(item => (
          <PostBookCard key={item.id} book={item} />
        ))}
      </div>
    </>
  )
}

export default RecommendedBooks