import {useEffect, type ComponentType} from "react";
import BooksForChildren from "../../../widgets/PostList/BooksForChildren";
import DetectivesAndThrillers from "../../../widgets/PostList/DetectivesAndThrillers";
import FantasyBooks from "../../../widgets/PostList/FantasyBooks";
import FictionBooks from "../../../widgets/PostList/FictionBooks";
import RecommendedBooks from "../../../widgets/PostList/RecommendedBooks";
import AlbumPhotos from "../../../widgets/PostList/AlbumPhotos";
import UserAlbums from "../../../widgets/PostList/UserAlbums";
import UserPosts from "../../../widgets/PostList/UserPosts";
import UserTodos from "../../../widgets/PostList/UserTodos";
import Posts from "../../../widgets/PostList/Posts";
import UserPostComments from "../../../widgets/PostList/UserPostComments";

interface OptionsLoading {
  loadingText?: string;
  showSpinner?: boolean;
}

// Пропсы, которые добавляет HOC
export interface WithLoadingProps {
    loading?: boolean;
    updateLoading: (value: boolean) => void;
    shouldFilter?: boolean;
    filterOptions?: {
        maxLength: number;
        minLength: number;
    };
}

// HOC: P extends object - дженерик для пропсов оборачиваемого компонента
export function withLoading<P extends object>(
    WrappedComponent: ComponentType<P>, // Компонент, который нужно обернуть
    options: OptionsLoading = {}, // Настройки HOC (по умолчанию пустой объект)
    ): ComponentType<P & WithLoadingProps> { // Возвращаем новый компонент с доп. пропсами

          // Деструктуризация со значениями по умолчанию
    const {
        loadingText = 'Загрузка...',      // Если не передано, будет 'Загрузка...'
        showSpinner = true,               // Если не передано, будет true
    } = options; // Берём из переданных options

    // ВНУТРЕННИЙ КОМПОНЕНТ, КОТОРЫЙ ВОЗВРАЩАЕТ HOC
    function LoadingWrapper (props: P & WithLoadingProps) {
        const {loading, updateLoading, ...restProps} = props;

        useEffect(() => {
            if (loading) {
                    const timer = setTimeout(() => {
                    updateLoading(false);
                }, 1000);

                // Очистка таймера при размонтировании или изменении loading
                return () => {
                    clearTimeout(timer);
                }
            }
        }, [loading, updateLoading]);

        if (loading) {
            return (
                <div style={{ 
                        padding: '40px', 
                        textAlign: 'center',
                        minHeight: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}> {showSpinner && (
                        <div style={{
                            width: '40px',
                            height: '40px',
                            border: '4px solid #f3f3f3',
                            borderTop: '4px solid #3498db',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                            marginBottom: '20px'
                            }}
                        >
                        </div>
                    )}
                        <p>{loadingText}</p>
                </div>
            )
        }
        
        return <WrappedComponent {...restProps as P} />;
    }

    return LoadingWrapper; // Возвращаем новый компонент
}

export const LoadingBooksForChildren = withLoading(BooksForChildren, {loadingText: '...Загрузка раздела Детские книги', showSpinner: true});
export const LoadingDetectivesAndThrillers = withLoading(DetectivesAndThrillers, {loadingText: '...Загрузка раздела Детективы и триллеры', showSpinner: true});
export const LoadingFantasyBooks = withLoading(FantasyBooks, {loadingText: '...Загрузка раздела Фантастика', showSpinner: true});
export const LoadingFictionBooks = withLoading(FictionBooks, {loadingText: '...Загрузка раздела Художественная литература', showSpinner: true});
export const LoadingRecommendedBooks = withLoading(RecommendedBooks, {loadingText: '...Загрузка раздела Рекомендуемые книги', showSpinner: true});

export const LoadingAlbumPhotos = withLoading(AlbumPhotos, {loadingText: '...Загрузка раздела Фото пользователей', showSpinner: true});
export const LoadingPostCommentsUser = withLoading(UserPostComments, {loadingText: '...Загрузка раздела Посты комментариев пользователей', showSpinner: true});
export const LoadingPosts = withLoading(Posts, {loadingText: '...Загрузка раздела Посты всех пользователей', showSpinner: true});
export const LoadingUserAlbums = withLoading(UserAlbums, {loadingText: '...Загрузка раздела Альбомы пользователя', showSpinner: true});
export const LoadingUserPosts = withLoading(UserPosts, {loadingText: '...Загрузка раздела Посты пользователя', showSpinner: true});
export const LoadingUserTodos = withLoading(UserTodos, {loadingText: '...Загрузка раздела Задачи пользователя', showSpinner: true});