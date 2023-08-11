import { Pagination } from '@mui/material';
import style from './post.module.css'

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
                <div className={style.post} key={post.id}>
                    <div className={style.post__container}>
                        <span className={style.post__title}>{post.title}</span>
                        <p className={style.post__body}>{post.body}</p>
                    </div>
                </div>
            ))}
            <div className={style.post__pagination}>
                <Pagination count={pageCount} page={page} onChange={onChange} />
            </div>
        </div>
    );
}
