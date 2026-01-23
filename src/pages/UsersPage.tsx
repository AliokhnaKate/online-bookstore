import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import Users from "../widgets/PostList/Users";

const LoadingUsers = withLoading(Users, {loadingText: 'Загрузка пользователей', showSpinner: true})

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