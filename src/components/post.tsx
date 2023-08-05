import { data } from '../components/json';
import { useState } from 'react';
import style from './../style/post.module.css'

const Post = () => {
    const [state, setState] = useState('');

    return (
        <div className={style.post}>
            <div className={style.post__buttons}>
                <button className={style.post__buttons__button} onClick={() => { setState('b1') }}>1</button>
                <button className={style.post__buttons__button} onClick={() => { setState('b2') }}>2</button>
                <button className={style.post__buttons__button} onClick={() => { setState('b3') }}>3</button>
                <button className={style.post__buttons__button} onClick={() => { setState('b4') }}>4</button>
                <button className={style.post__buttons__button} onClick={() => { setState('b5') }}>5</button>
                <button className={style.post__buttons__button} onClick={() => { setState('b6') }}>6</button>
                <button className={style.post__buttons__button} onClick={() => { setState('b7') }}>7</button>
                <button className={style.post__buttons__button} onClick={() => { setState('b8') }}>8</button>
                <button className={style.post__buttons__button} onClick={() => { setState('b9') }}>9</button>
                <button className={style.post__buttons__button} onClick={() => { setState('b10') }}>10</button>
            </div>

            {state === '' &&
                <div className={style.list}>
                    {data.map(() => {
                        return (
                            <div className={style.post__container}>
                                <p className={style.post__title}>{data[0].title}</p>
                                <p className={style.post__body}>{data[0].body}</p>
                            </div>
                        )
                    })}
                </div>
            }

            {state === 'b1' &&
                <div className={style.list}>
                    {data.map(() => {
                        return (
                            <div className={style.post__container}>
                                <p className={style.post__title}>{data[0].title}</p>
                                <p className={style.post__body}>{data[0].body}</p>
                            </div>
                        )
                    })}
                </div>
            }

            {state === 'b2' &&
                <div className={style.list}>
                    {data.map(() => {
                        return (
                            <div className={style.post__container}>
                                <p className={style.post__title}>{data[1].title}</p>
                                <p className={style.post__body}>{data[1].body}</p>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    );
}

export default Post