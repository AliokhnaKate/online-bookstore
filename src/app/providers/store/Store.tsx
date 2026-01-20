import {configureStore} from "@reduxjs/toolkit";
import {albumsApi, commentsApi, postsApi, todosApi, usersApi} from "../../../entities/[entity]/api/Api";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware)  => 
        getDefaultMiddleware().concat(
            postsApi.middleware,
            commentsApi.middleware,
            albumsApi.middleware,
            todosApi.middleware,
            usersApi.middleware
            ),
});