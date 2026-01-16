import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {LoadingPosts} from "../shared/lib/hoc/WithLoader";

function PostsPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingPosts
                    loading={loadingStates.LoadingPosts}
                    updateLoading={(value) => updateLoading('LoadingPosts', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default PostsPage;