import {useOutletContext} from "react-router-dom"
import {LoadingBooksForChildren} from "../shared/lib/hoc/WithLoader";
import type {MainOutletContext} from "../shared/layouts/MainLayout";

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