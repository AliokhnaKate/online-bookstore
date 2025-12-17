import BooksForChildren from './BooksForChildren';
import DetectivesAndThrillers from './DetectivesAndThrillers';
import FantasyBooks from './FantasyBooks';
import FictionBooks from './FictionBooks';
import RecommendedBooks from './RecommendedBooks';

function BookCategories() {
  return (
    <>
    <aside className='sidebar'>
        <h3>Категории</h3>
        <div className="categories">
            <ul>
                <li><a href="#"><RecommendedBooks /></a></li>
                <li><a href="#"><BooksForChildren /></a></li>
                <li><a href="#"><DetectivesAndThrillers /></a></li>
                <li><a href="#"><FantasyBooks /></a></li>
                <li><a href="#"><FictionBooks /></a></li>
            </ul>
            </div>
    </aside>
    </>
  )
}

export default BookCategories;