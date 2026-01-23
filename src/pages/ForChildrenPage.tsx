import {useOutletContext} from "react-router-dom"
import {withLoading} from "../shared/lib/hoc/WithLoader";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import BooksForChildren from "../widgets/PostList/BooksForChildren";

const LoadingBooksForChildren = withLoading(BooksForChildren, {loadingText: '...Загрузка раздела Детские книги', showSpinner: true});

function ForChildrenPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingBooksForChildren
                    loading={loadingStates.LoadingBooksForChildren}
                    updateLoading={(value) => updateLoading('LoadingBooksForChildren', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default ForChildrenPage;