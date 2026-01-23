import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import FictionBooks from "../widgets/PostList/FictionBooks";

const LoadingFictionBooks = withLoading(FictionBooks, {loadingText: '...Загрузка раздела Художественная литература', showSpinner: true});

function FictionPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingFictionBooks
                    loading={loadingStates.LoadingFictionBooks}
                    updateLoading={(value) => updateLoading('LoadingFictionBooks', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default FictionPage;