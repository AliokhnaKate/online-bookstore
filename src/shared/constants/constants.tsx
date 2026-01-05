import React from "react";
import type {BookModel} from "../../entities/post/models/BookModel";

//создание контекста
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
    theme: Theme,
    toggleTheme: () => void
}

//создание контекста с дефолтными значениями
export const ThemeContext=React.createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {}
});

export const recommended: BookModel[] = [
    {id: 'Alice', imageUrl: '../../../public/alica.webp', title: 'Алиса в Стране чудес', author: 'Льюис Кэрролл', price: parseInt('30 руб')},
    {id: 'Little prince', imageUrl: '../../../public/мален принц.webp', title: 'Маленький принц', author: 'А. де Сент-Экзюпери', price: parseInt('15 руб')},
    {id: 'Harry Potter', imageUrl: '../../../public/гарри поттер.webp', title: 'Гарри Поттер', author: 'Дж. Роулинг', price: parseInt('52 руб')},
    {id: 'Green Mile', imageUrl: '../../../public/зеленая миля.webp', title: 'Зеленая миля', author: 'С. Кинг', price: parseInt('18 руб')},
    {id: 'Lord of the Rings', imageUrl: '../../../public/властелин колец.webp', title: 'Властелин колец', author: 'Дж. Р.Р. Толкин', price: parseInt('25 руб')}
  ]