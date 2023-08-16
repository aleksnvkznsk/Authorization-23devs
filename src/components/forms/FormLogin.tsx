import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingField } from "./form";
import style from './form.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/auth";

const FormLogin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IShippingField>({
        mode: 'onBlur'
    });

    const onSubmit: SubmitHandler<IShippingField> = (data: any) => {
        console.log(data)
        reset()
    }


    const auth = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const signIn = () => {
        auth.login('test@gmail.com');
        navigate(from, { replace: true });
    };

    return (
        <div className={style.form}>
            <form className={style.form__container} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={style.form__container__header}>Вход</h1>

                {/* email */}
                <input className={style.form__container__input}
                    {...(register(`email`, {
                        required: 'Введите email',
                        pattern: {
                            value: /^\w+@\w+\.\w{2,4}$/i,
                            message: 'Введите email правильно',
                        }
                    }))} type="email" placeholder="Email"
                />
                {errors.email && <div className={style.form__container__error}>{errors.email.message}</div>}

                {/* password */}
                <input className={style.form__container__input}
                    {...(register(`password`, {
                        required: 'Введите пароль',
                        maxLength: {
                            value: 20,
                            message: "Максимальная длинна 20 символов"
                        },
                        minLength: {
                            value: 8,
                            message: "Минимальная длинна 8 символа"
                        }
                    }))} type="password" placeholder="Пароль"
                />
                {errors.password && <div className={style.form__container__error}>{errors.password.message}</div>}

                <button onClick={signIn} className={style.form__container__button}>Войти</button>
            </form>

            <div className={style.form__page}>
                <p className={style.form__text}>Нету аккаунта?  <a className={style.form__href} href="/registr">зарегестрироваться</a></p>
            </div>
        </div>
    );
}

export default FormLogin