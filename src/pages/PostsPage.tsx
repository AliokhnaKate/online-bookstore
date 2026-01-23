import {useOutletContext} from "react-router-dom";
import type {MainOutletContext} from "../shared/layouts/MainLayout";
import {withLoading} from "../shared/lib/hoc/WithLoader";
import Posts from "../widgets/PostList/Posts";

const LoadingPosts = withLoading(Posts, {loadingText: '...Загрузка раздела Посты всех пользователей', showSpinner: true});

function PostsPage () {
    const {loadingStates, updateLoading, filterOptions} = useOutletContext<MainOutletContext>();

    return (
        <>
            <LoadingPosts
                    loading={loadingStates.LoadingPosts}
                    updateLoading={(value) => updateLoading('LoadingPosts', value)}
                    filterOptions={filterOptions}
            />
        </>
    )
}

export default PostsPage;