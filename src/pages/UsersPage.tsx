import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {LoadingUsers} from "../shared/lib/hoc/WithLoader";

function UsersPage() {
    const{loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingUsers
                loading={loadingStates.LoadingUsers}
                updateLoading = {(value) => updateLoading('LoadingUsers', value)}
                filterOptions = {filterOptions}
            />
        </>
    )
}

export default UsersPage;