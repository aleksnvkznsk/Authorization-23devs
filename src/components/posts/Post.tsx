import PaginationControlled from '../pagination/Pagination';
import style from './post.module.css';



const Post = () => {

    return (
        <div className={style.post}>
            <div className={style.post__container}>
                <p className={style.post__title}>title</p>
                <p className={style.post__body}>body</p>
            </div>
            <PaginationControlled />
        </div>
    );
}

export default Post