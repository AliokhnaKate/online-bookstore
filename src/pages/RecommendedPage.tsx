import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import RecommendedBooks from "../widgets/PostList/RecommendedBooks";

const LoadingRecommendedBooks = withLoading(RecommendedBooks, {loadingText: '...Загрузка раздела Рекомендуемые книги', showSpinner: true});

function RecommendedPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingRecommendedBooks
                    loading={loadingStates.LoadingRecommendedBooks}
                    updateLoading={(value) => updateLoading('LoadingRecommendedBooks', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default RecommendedPage;