import type {FilterTitleModel} from "../../../entities/post/models/FilterTitleModel";

export const PostLengthFilter: React.FC<FilterTitleModel> = ({
    maxLength,
    minLength,
    isActive,
    onToggle
}) => {

    return (
        <>
            <button
            onClick={onToggle}
            title={`Показывать книги с заголовком от ${minLength} до ${maxLength} символов`}
            >
                {isActive ? 'Показать короткие заголовки' : 'Показать все'}
            </button>
        </>
    )
}