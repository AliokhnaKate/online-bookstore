import {albumsApi} from "../../entities/[entity]/api/Api";
import type {UserAlbumPhotosModel} from "../../entities/[entity]/model/types";
const {useGetAlbumsQuery } = albumsApi;

function AlbumPhotos () {

  const {data: albums} = useGetAlbumsQuery(2);

  return (
    <>
      <div>Фото пользователя</div>
      {albums?.map((album: UserAlbumPhotosModel) => (
        <div key={album.id}>
          <img src={album.thumbnailUrl} alt={album.title} />
        </div>
        ) 
      )}
    </>
  )
}

export default AlbumPhotos;