import PostBookCard from "../../entities/post/ui/PostBookCard";
import styles from '../../App.module.css';
import filterByLengthTitle from "../../features/PostLengthFilter/lib/filterByLength";
import {useMemo} from "react";

interface RecommendedBooksProps {    
  filterOptions?: {
    shouldFilter?: boolean;               
    maxLength: number;
    minLength: number;
  };
}

function RecommendedBooks ({filterOptions} : RecommendedBooksProps) {

  const recommended = [
    {id: 'Alice', imageUrl: '../../../public/alica.webp', title: 'Алиса в Стране чудес', author: 'Льюис Кэрролл', description: 'О любопытной девочке Алисе, которая, провалившись в кроличью нору, попадает в абсурдный волшебный мир!', price: parseInt('30 руб')},
    {id: 'Little prince', imageUrl: '../../../public/мален принц.webp', title: 'Маленький принц', author: 'А. де Сент-Экзюпери', description: '', price: parseInt('15 руб')},
    {id: 'Harry Potter', imageUrl: '../../../public/гарри поттер.webp', title: 'Гарри Поттер', author: 'Дж. Роулинг', description: '', price: parseInt('52 руб')},
    {id: 'Green Mile', imageUrl: '../../../public/зеленая миля.webp', title: 'Зеленая миля', author: 'С. Кинг', description: '', price: parseInt('18 руб')},
    {id: 'Lord of the Rings', imageUrl: '../../../public/властелин колец.webp', title: 'Властелин колец', author: 'Дж. Р.Р. Толкин', description: '', price: parseInt('25 руб')}
  ];

    const filteredBooks =useMemo(() => {
      return filterOptions?.shouldFilter
    ? recommended.filter(book => filterByLengthTitle(book, filterOptions))
    : recommended;
    }, [recommended]);

  return (
    <>
      <div className={styles.bookList}>
        <h2>Рекомендуемые книги</h2>
        {filteredBooks.map(item => (
          <PostBookCard key={item.id} book={item} />
        ))}
      </div>      
    </>
  )
}

export default RecommendedBooks