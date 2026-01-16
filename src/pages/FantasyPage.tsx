import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {LoadingFantasyBooks} from "../shared/lib/hoc/WithLoader";

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