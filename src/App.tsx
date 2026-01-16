import styles from './App.module.css';
import {ThemeSwitcher} from './features/ThemeSwitcher/ui/ThemeSwitcher';
import {ThemeProvider} from './shared/lib/theme/ThemeProvider';
import Footer from './widgets/LayoutFooter/Footer';
import Header from './widgets/LayoutHeader/Header';
import UsePortal from './shared/ui/Modal/PortalAboutProject';
import {useState} from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from './app/providers/router/Router';

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
            <RouterProvider router={router} />
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