import type {BookModel} from '../../../entities/post/models/BookModel';

interface FilterOptions {
    maxLength: number,
    minLength: number
}

function filterByLengthTitle(book: BookModel, options: FilterOptions) {
    const {maxLength = 25, minLength = 1} = options;

    const titleLength = book.title.length;
    return titleLength <= maxLength && titleLength >= minLength;
}

export default filterByLengthTitle