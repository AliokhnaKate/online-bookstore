import styles from './App.module.css';
import {ThemeSwitcher} from './features/ThemeSwitcher/ui/ThemeSwitcher';
import {ThemeProvider} from './shared/lib/theme/ThemeProvider';
import Footer from './widgets/LayoutFooter/Footer';
import Header from './widgets/LayoutHeader/Header';
import BookCategories from './widgets/PostList/BookCategories';
import UsePortal from './shared/ui/Modal/PortalAboutProject';
import {useCallback, useState} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {
  LoadingBooksForChildren,
  LoadingDetectivesAndThrillers,
  LoadingFantasyBooks,
  LoadingFictionBooks,
  LoadingRecommendedBooks
        } from './shared/lib/hoc/WithLoader';
import type {LoadingStates} from './entities/post/models/LoadingStates';
import {PostLengthFilter} from './features/PostLengthFilter/ui/PostLengthFilter';

function App() {
  //создаем компонент Portal через хук, тк хуки нельзя использовать как компоненты
  const Portal = UsePortal('portal-root');
  const [showModal, setShowModal] = useState(false);

  const [loadingStates, setLoadingStates] = useState<LoadingStates>({
    LoadingRecommendedBooks: true,
    LoadingBooksForChildren: true,
    LoadingDetectivesAndThrillers: true,
    LoadingFantasyBooks: true,
    LoadingFictionBooks: true
  })

  const [isFilterActive, setIsFilterActive] = useState(false);

    const filterOptions = {
    shouldFilter: !isFilterActive,
    maxLength: 15,
    minLength: 1
  };

  //ф-я обновления состояния компонента
  const updateLoading = useCallback((component: keyof LoadingStates, value: boolean) => {
    setLoadingStates(prev => ({
      ...prev,
      [component]: value
    }));
  }, []);

  const toggle = useCallback(() => {
      setIsFilterActive(prev => !prev);
  }, []);

  return (
    <>
    <div className={styles.container}>
      <div className={styles.app}>
        <div className={styles.container}>
          <PostLengthFilter 
            isActive={isFilterActive}
            onToggle={toggle}
            maxLength={filterOptions.maxLength}
            minLength={filterOptions.minLength}
          />
            <Header />
            <BookCategories />
            <Routes>
              <Route path='/' element={<Navigate to='/recommended' replace/>} />
              <Route path="/recommended"
                element={
                  <LoadingRecommendedBooks
                    loading={loadingStates.LoadingRecommendedBooks}
                    updateLoading={(value) => updateLoading('LoadingRecommendedBooks', value)}
                    filterOptions={filterOptions}
                  />
                }
              />
              <Route path="/forChildren"
                element={
                  <LoadingBooksForChildren
                    loading={loadingStates.LoadingBooksForChildren}
                    updateLoading={(value) => updateLoading('LoadingBooksForChildren', value)}
                    
                  />
                }
              />
              <Route path="/detAndThril"
                element={
                  <LoadingDetectivesAndThrillers
                    loading={loadingStates.LoadingDetectivesAndThrillers}
                    updateLoading={(value) => updateLoading('LoadingDetectivesAndThrillers', value)}
                  />
                }
              />
              <Route path="/fantasy"
                element={
                  <LoadingFantasyBooks
                    loading={loadingStates.LoadingFantasyBooks}
                    updateLoading={(value) => updateLoading('LoadingFantasyBooks', value)}
                  />
                }
              />
              <Route path="/fiction"
                element={
                  <LoadingFictionBooks
                    loading={loadingStates.LoadingFictionBooks}
                    updateLoading={(value) => updateLoading('LoadingFictionBooks', value)}
                  />
                }
              />
            </Routes>

            <Footer />
            <ThemeProvider>
                <ThemeSwitcher/>
            </ThemeProvider>

            <button onClick={(e) => {
                                      e.stopPropagation();
                                      setShowModal(true)}
                                    }>О проекте
            </button>

            {showModal && (
                <Portal onClose={() => setShowModal(false)}>
                  <div className={styles.aboutProject}>
                    <Portal.Header onClose={() => setShowModal(false)}>
                      <h3 className={styles.aboutProject__title}>Ваш книжный проводник</h3>
                    </Portal.Header>
                    
                    <Portal.Body>
                      <p className={styles.aboutProject__text}>Мы не просто продаем книги — мы помогаем найти ту самую, которая станет частью вашей истории.</p>
                    </Portal.Body>

                    <Portal.Footer>
                      <button onClick={() => setShowModal(false)}>OK</button>
                    </Portal.Footer>
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