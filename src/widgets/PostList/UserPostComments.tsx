import {commentsApi} from "../../entities/[entity]/api/Api";
import type {UserCommentModel} from "../../entities/post/models/UserCommentModel";
const {useGetCommentsQuery} = commentsApi;

function UserPostComments () {

const {data: posts} = useGetCommentsQuery(1);

  return (
    <>
      <div>Комментарии пользователя</div>
      {posts?.map((post: UserCommentModel) => (
          <div key={post.id}>
            <h1>{post.name}</h1>
            <p>{post.email}</p>
            <span>{post.body}</span>
          </div>
        )
      )}
    </>
  )
}

export default UserPostComments;