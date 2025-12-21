import {useEffect, useRef, type PropsWithChildren} from "react";
import {createPortal} from "react-dom";
import styles from '../../../App.module.css';

function UsePortal (id: string = 'portal-root') {
  //// useRef тип: React.MutableRefObject<null>
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let container = document.getElementById(id) as HTMLDivElement | null;

    if (!container) {
      container = document.createElement('div');
      container.id = id;
      document.body.appendChild(container);
    }

    //Сохраняем ссылку в rootRef.current
    rootRef.current = container;
  }, [id]);

  // Типизируем пропсы компонента Portal
  interface PortalProps {
    onClose: () => void;
  }
  //Создание компонента Portal
  const Portal = ({onClose, children}:  PropsWithChildren<PortalProps>) => {
    //rootRef.current - весь div в компоненте App, обернутый в Portal
    return rootRef.current ? createPortal(
      <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.modalContent__closeButton} onClick={onClose} aria-label="Закрыть">
                <span></span>
                <span></span>
            </button>
            {children}
          </div>
      </div>
      , rootRef.current
      ) : null;
  }

  return Portal;
}

export default UsePortal;