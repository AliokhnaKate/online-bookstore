import {useEffect, useState} from "react";

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

const api = 'https://jsonplaceholder.typicode.com/posts';

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

     useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${api}`);
            const data = await response.json();
            setPosts(data)
        }

        fetchPosts();
     }, []);

    return {posts};
}