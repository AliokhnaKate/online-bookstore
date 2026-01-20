import {albumsApi} from "../../entities/[entity]/api/Api";
import type {UserPhotoModel} from "../../entities/post/models/UserPhotoModel";
const {useGetAlbumsQuery } = albumsApi;

function AlbumPhotos () {

  const {data: albums} = useGetAlbumsQuery(2);

  return (
    <>
      <div>Фото пользователя</div>
      {albums?.map((album: UserPhotoModel) => (
        <div key={album.id}>
          <img src={album.thumbnailUrl} alt={album.title} />
        </div>
        ) 
      )}
    </>
  )
}

export default AlbumPhotos;