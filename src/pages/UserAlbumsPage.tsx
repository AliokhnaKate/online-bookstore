import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import UserAlbums from "../widgets/PostList/UserAlbums";

const LoadingUserAlbums = withLoading(UserAlbums, {loadingText: '...Загрузка раздела Альбомы пользователя', showSpinner: true});

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