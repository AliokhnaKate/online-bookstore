import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {LoadingPostComments} from "../shared/lib/hoc/WithLoader";

function PostCommentsPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingPostComments
                    loading={loadingStates.LoadingPostComments}
                    updateLoading={(value) => updateLoading('LoadingPostComments', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default PostCommentsPage;