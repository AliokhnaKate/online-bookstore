import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import AlbumPhotos from "../widgets/PostList/AlbumPhotos";

const LoadingAlbumPhotos = withLoading(AlbumPhotos, {loadingText: '...Загрузка раздела Фото пользователей', showSpinner: true});

function AlbumPhotosPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingAlbumPhotos
                    loading={loadingStates.LoadingAlbumPhotos}
                    updateLoading={(value) => updateLoading('LoadingAlbumPhotos', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default AlbumPhotosPage;