import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {LoadingAlbumPhotos} from "../shared/lib/hoc/WithLoader";

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