import { useEffect, useState } from 'react';

export interface PostProps {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export function usePosts() {
    const [data, setData] = useState<PostProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    let ignore = false;
    useEffect(() => {
        const getDate = async () => {
            setIsLoading(true);

            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            );

            if (!response.ok) {
                console.log(response);
            }

            const posts: PostProps[] = await response.json();

            setData(posts);
            setIsLoading(false);
        };

        if (!ignore) {
            getDate();
        }

        return () => {
            ignore = true;
        };
    }, []);

    return { data, isLoading };
}

export function usePagination<T extends object>(postsPerPage = 10, data: T[]) {
    const [page, setPage] = useState(1);

    const pageCount = Math.ceil(data.length / postsPerPage);

    const onChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const dataByPage = data.slice(
        (page - 1) * postsPerPage,
        page * postsPerPage
    );

    return { page, pageCount, dataByPage, onChange };
}
