import {usePosts} from "./model/hooks/UsePosts";

const Posts: React.FC = () => {
  const {posts} = usePosts();

  return (
    <>
      <div>Посты пользователей</div>
      {posts.map(post => (
          <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{post.userId}</p>
          </div>
      ))}
    </>
  )
}

export default Posts;