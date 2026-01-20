import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

//Создает специальный адаптер для нормализованного состояния.
//Он автоматически хранит данные в формате { ids: [], entities: {} }
const postAdapter = createEntityAdapter();

//создаем функцию Redux Toolkit, которая автоматически генерирует action creators и редюсеры из набора reducer функций
const PostSlice = createSlice({
    name: 'post',
    //начальное состояние (при запуске приложения), создает пустой объект, аналогично {ids: [], entities: {}, status: 'idle'
    initialState: postAdapter.getInitialState({status: 'idle'}),
    reducers: {
        postAdded: postAdapter.addOne,
        postUpdated: postAdapter.updateOne,
        postReceived: postAdapter.setAll,
    },
});

export const {postAdded, postUpdated, postReceived} = PostSlice.actions;
export default PostSlice.reducer;