import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import FantasyBooks from "../widgets/PostList/FantasyBooks";

const LoadingFantasyBooks = withLoading(FantasyBooks, {loadingText: '...Загрузка раздела Фантастика', showSpinner: true});

function FantasyPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingFantasyBooks
                    loading={loadingStates.LoadingFantasyBooks}
                    updateLoading={(value) => updateLoading('LoadingFantasyBooks', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default FantasyPage;