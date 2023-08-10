import { Pagination } from '@mui/material';

import { PostProps, usePagination, usePosts } from './hooks.ts';

const POST_PER_PAGE = 10;

export default function Post() {
    const { data, isLoading } = usePosts();
    const { page, pageCount, dataByPage, onChange } = usePagination<PostProps>(
        POST_PER_PAGE,
        data
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {dataByPage.map((post) => (
                <div key={post.id}>
                    <span>{post.title}</span>
                    <p>{post.body}</p>
                </div>
            ))}
            <Pagination count={pageCount} page={page} onChange={onChange} />
        </div>
    );
}
