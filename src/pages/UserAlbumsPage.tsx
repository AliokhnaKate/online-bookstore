import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {LoadingUserAlbums} from "../shared/lib/hoc/WithLoader";

function UserAlbumsPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingUserAlbums
                    loading={loadingStates.LoadingUserAlbums}
                    updateLoading={(value) => updateLoading('LoadingUserAlbums', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default UserAlbumsPage;