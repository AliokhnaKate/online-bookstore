import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {LoadingFictionBooks} from "../shared/lib/hoc/WithLoader";

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