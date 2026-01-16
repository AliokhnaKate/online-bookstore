import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {LoadingUserPosts} from "../shared/lib/hoc/WithLoader";

function UserPostsPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingUserPosts
                    loading={loadingStates.LoadingUserPosts}
                    updateLoading={(value) => updateLoading('LoadingUserPosts', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default UserPostsPage;