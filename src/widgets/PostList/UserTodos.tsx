import {todosApi} from "../../entities/[entity]/api/Api";
import type {UserTodosModel} from "../../entities/post/models/UserTodosModel";
const { useGetTodosQuery } = todosApi;

function UserTodos () {

  const {data: users} = useGetTodosQuery(1);

  return (
    <>
      <div>Задачи пользователя</div>
      {users?.map((user: UserTodosModel) => (
          <div key={user.id}>
            <p>{user.title}</p>
          </div>
        )
      )}
    </>
  )
}

export default UserTodos;