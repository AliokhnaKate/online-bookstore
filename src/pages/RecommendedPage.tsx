import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {LoadingRecommendedBooks} from "../shared/lib/hoc/WithLoader";

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