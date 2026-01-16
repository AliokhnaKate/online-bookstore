import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {LoadingUserTodos} from "../shared/lib/hoc/WithLoader";

function UserTodosPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingUserTodos
                    loading={loadingStates.LoadingUserTodos}
                    updateLoading={(value) => updateLoading('LoadingUserTodos', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default UserTodosPage;