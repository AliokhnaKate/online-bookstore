import {NavLink} from 'react-router-dom';
import styles from '../../App.module.css';

interface ItemCategory {
        id: string,
        path: string,
        text: string
};

interface UserTabsProps  {
    categoriesBooks: ItemCategory[],
};

function UserTabs({categoriesBooks}: UserTabsProps) {

    return (
        <>
            <div className={styles.categories}>
            {categoriesBooks.map(item => (
              <NavLink key={item.id} to={item.path}>
                {item.text}
              </NavLink>
            ))}
            </div>
        </>
    )
}
export default UserTabs;