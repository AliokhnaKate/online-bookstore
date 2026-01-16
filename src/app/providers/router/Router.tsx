import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../../../shared/layouts/MainLayout";
import ForChildrenPage from "../../../pages/ForChildrenPage";
import RecommendedPage from "../../../pages/RecommendedPage";
import FictionPage from "../../../pages/FictionPage";
import FantasyPage from "../../../pages/FantasyPage";
import DetAndThrilPage from "../../../pages/DetAndThrilPage";
import UserPostsPage from "../../../pages/UserPostsPage";
import UserAlbumsPage from "../../../pages/UserAlbumsPage";
import UserTodosPage from "../../../pages/UserTodosPage";
import PostsPage from "../../../pages/PostsPage";
import AlbumPhotosPage from "../../../pages/AlbumPhotosPage";
import PostCommentsPage from "../../../pages/PostCommentsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [

            {index: true, element: <Navigate to='/posts' replace/>},

            {path: "/posts", element: <PostsPage />},
            {path: "/posts/:id", element: <PostCommentsPage />},
            {path: "/albums/:id/photos", element: <AlbumPhotosPage />},
            {path: "/users/:id/posts", element: <UserPostsPage />},
            {path: "/users/:id/albums", element: <UserAlbumsPage />},
            {path: "/users/:id/todos", element: <UserTodosPage />},

            {path: "/recommended", element: <RecommendedPage />},
            {path: "/forChildren", element: <ForChildrenPage />},
            {path: "/detAndThril", element: <DetAndThrilPage />},
            {path: "/fantasy", element: <FantasyPage />},
            {path: "/fiction", element: <FictionPage />},
        ],
    },
]);