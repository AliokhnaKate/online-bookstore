import {todosApi} from "../../entities/[entity]/api/Api";
import type {UserTodoModel} from "../../entities/[entity]/model/types";
const { useGetTodosQuery } = todosApi;

function UserTodos () {

  const {data: users} = useGetTodosQuery(1);

  return (
    <>
      <div>Задачи пользователя</div>
      {users?.map((user: UserTodoModel) => (
          <div key={user.id}>
            <span>{user.title}</span>
          </div>
        )
      )}
    </>
  )
}

export default UserTodos;