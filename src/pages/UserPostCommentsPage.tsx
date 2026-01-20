import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {LoadingPostCommentsUser} from "../shared/lib/hoc/WithLoader";

function UserPostCommentsPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingPostCommentsUser
                    loading={loadingStates.LoadingPostCommentsUser}
                    updateLoading={(value) => updateLoading('LoadingPostCommentsUser', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default UserPostCommentsPage;