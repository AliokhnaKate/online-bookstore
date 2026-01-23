import {commentsApi} from "../../entities/[entity]/api/Api";
import type {UserCommentModel} from "../../entities/[entity]/model/types";
import {CommentList} from "../CommentList/ui/CommentList";
const {useGetCommentsQuery} = commentsApi;

function UserPostComments () {

const {data: posts} = useGetCommentsQuery(1);

  return (
    <>
      <CommentList collapseComment={'свернуть'} expandComment={'развернуть'} hidden={true}>
        <div>Комментарии пользователя</div>
        {posts?.map((post: UserCommentModel) => (
            <div key={post.id}>
              <span>{post.body}</span>
            </div>
          )
        )}
      </CommentList>
    </>
  )
}

export default UserPostComments;