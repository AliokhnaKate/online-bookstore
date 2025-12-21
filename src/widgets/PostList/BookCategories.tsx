import BooksForChildren from './BooksForChildren';
import DetectivesAndThrillers from './DetectivesAndThrillers';
import FantasyBooks from './FantasyBooks';
import FictionBooks from './FictionBooks';
import RecommendedBooks from './RecommendedBooks';
import styles from '../../App.module.css';
import {Link} from 'react-router-dom';

function BookCategories() {
  const categoriesBooks = [
    {id: 'Recommend', path: '/recommended', component: <RecommendedBooks />, text:'Рекомендуемые книги'},
    {id: 'ForChildren', path: '/forChildren', component: <BooksForChildren />, text:'Детские книги'},
    {id: 'DetAndThril', path: '/detAndThril', component: <DetectivesAndThrillers />, text: 'Детективы и триллеры'},
    {id: 'Fantasy', path: '/fantasy', component: <FantasyBooks />, text: 'Фантастика'},
    {id: 'Fiction', path: '/fiction', component: <FictionBooks />, text: 'Художественные книги'},
  ]
  return (
    <>
    <aside className={styles.sidebar}>
        <h3>Категории</h3>
        <div className={styles.categories}>
            {categoriesBooks.map(item => (
              <Link key={item.id} to={item.path}>
                {item.text}
              </Link>
            ))}
            </div>
    </aside>
    </>
  )
}

export default BookCategories;