import styles from '../../App.module.css';
import UserTabs from '../UserTabs/UserTabs';

function BookCategories() {

      const categoriesBooks = [
        {id: 'Recommend', path: '/recommended', text:'Рекомендуемые книги'},
        {id: 'ForChildren', path: '/forChildren',  text:'Детские книги'},
        {id: 'DetAndThril', path: '/detAndThril', text: 'Детективы и триллеры'},
        {id: 'Fantasy', path: '/fantasy', text: 'Фантастика'},
        {id: 'Fiction', path: '/fiction', text: 'Художественные книги'},
        
        {id: 'Users', path: '/users', text: 'Пользователи'},
        {id: 'Photos', path: '/albums/:id/photos', text: 'Фото пользователя'},
        {id: 'Comments', path: '/posts/:id/comments', text: 'Комментарии пользователей'},
        {id: 'Posts', path: '/posts', text: 'Посты пользователей'},
        {id: 'PostsUser', path: '/users/:id/posts', text: 'Посты пользователя'},
        {id: 'Albums', path: '/users/:id/albums', text: 'Альбомы пользователя'},
        {id: 'Todos', path: '/users/:id/todos', text: 'Задачи пользователей'},
    ];

  return (
    <>
    <aside className={styles.sidebar}>
        <h3>Категории</h3>
        <UserTabs 
        categoriesBooks={categoriesBooks}/>
    </aside>
    </>
  )
}

export default BookCategories;