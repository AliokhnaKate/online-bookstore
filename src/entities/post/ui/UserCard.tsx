
import UserAlbums from "../../../widgets/PostList/UserAlbums";
import UserPostComments from "../../../widgets/PostList/UserPostComments";
import UserPosts from "../../../widgets/PostList/UserPosts";
import UserTodos from "../../../widgets/PostList/UserTodos";
import type {UserModel} from "../../[entity]/model/types";
import ClickableBox from "../../../shared/ui/Button/Button";
import {useState} from "react";

interface UserCardModel {
    user: UserModel
}

function UserCard ({user}: UserCardModel) {
    const [show, setShow] = useState<"albums" | "posts" | "todos" | null>(null);

    return (
        <>
            <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <span>{user.address.city}, {user.address.street}, {user.address.suite}</span>
            </div>
            <div>

                <ClickableBox to='/users/:id/albums' onClick={(event) => {
                        event.currentTarget,
                        setShow(show === "albums" ? null : "albums")
                    }
                }>
                    Альбомы
                    {show === 'albums' && <UserAlbums />}
                </ClickableBox>

                <ClickableBox to='/users/:id/posts' onClick={(event) => {
                        event.currentTarget,
                        setShow(show === 'posts' ? null : 'posts')
                    }
                }>
                    Посты
                    {show === 'posts' && <UserPosts />}
                </ClickableBox>

                <ClickableBox to='/users/:id/todos' onClick={(event) => {
                        event.currentTarget,
                        setShow(show === 'todos' ? null : 'todos')
                    }
                }>
                    Задачи
                    {show === 'todos' && <UserTodos />}
                </ClickableBox>
                                        
                <UserPostComments />
            </div>
        </>
    )
}

export default UserCard;