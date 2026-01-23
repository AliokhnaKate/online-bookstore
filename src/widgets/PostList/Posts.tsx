import {postsApi} from "../../entities/[entity]/api/Api";
import type {PostModel} from "../../entities/[entity]/model/types";

const {useGetPostsQuery} = postsApi;

function Posts() {

  const {data: posts} = useGetPostsQuery();

  return (
    <>
      <div>Посты пользователей</div>
      {posts?.map((post: PostModel) => (
        <div key={post.id}>
            <h2>Посты пользователя {post.userId}</h2>
            <p>{post.title}</p>
            <span>{post.body}</span>
        </div>
      ))}
    </>
  )
}

export default Posts;

// import {usePosts} from "../../features/PostList/model/hooks/UsePosts";
// const Posts: React.FC = () => {
//   const {posts} = usePosts();

//   return (
//     <>
//       <div>Посты пользователей</div>
//       {posts.map(post => (
//           <div key={post.id}>
//             <p>{post.userId}</p>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//           </div>
//       ))}
//     </>
//   )
// }

// export default Posts;