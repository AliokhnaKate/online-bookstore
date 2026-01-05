import styles from './App.module.css';
import {ThemeSwitcher} from './features/ThemeSwitcher/ui/ThemeSwitcher';
import {ThemeProvider} from './shared/lib/theme/ThemeProvider';
import Footer from './widgets/LayoutFooter/Footer';
import Header from './widgets/LayoutHeader/Header';
import BookCategories from './widgets/PostList/BookCategories';
import UsePortal from './shared/ui/Modal/PortalAboutProject';
import {useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import RecommendedBooks from './widgets/PostList/RecommendedBooks';
import BooksForChildren from './widgets/PostList/BooksForChildren';
import DetectivesAndThrillers from './widgets/PostList/DetectivesAndThrillers';
import FantasyBooks from './widgets/PostList/FantasyBooks';
import FictionBooks from './widgets/PostList/FictionBooks';

function App() {
  //создаем компонент Portal через хук, тк хуки нельзя использовать как компоненты
  const Portal = UsePortal('portal-root');
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <div className={styles.container}>
      <div className={styles.app}>
        <div className={styles.container}>
          <Header />
          <BookCategories />
          <Routes>
            <Route path='/' element={<Navigate to='/recommended' replace/>} />
            <Route path="/recommended" element={<RecommendedBooks />} />
            <Route path="/forChildren" element={<BooksForChildren />} />
            <Route path="/detAndThril" element={<DetectivesAndThrillers />} />
            <Route path="/fantasy" element={<FantasyBooks />} />
            <Route path="/fiction" element={<FictionBooks />} />
          
          </Routes>

          <Footer />
          <ThemeProvider>
              <ThemeSwitcher/>
          </ThemeProvider>

          <button onClick={() => setShowModal(true)}>О проекте</button>
          {showModal && (
              <Portal onClose={() => setShowModal(false)}>
                <div className={styles.aboutProject}>
                  <h3 className={styles.aboutProject__title}>Ваш книжный проводник</h3>
                  <p className={styles.aboutProject__text}>Мы не просто продаем книги — мы помогаем найти ту самую, которая станет частью вашей истории.</p>
                </div>
              </Portal>
            )
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
