import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingField } from "./form";
import style from './../style/form.module.css';

const FormLogin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IShippingField>({
        mode: 'onBlur'
    });

    const onSubmit: SubmitHandler<IShippingField> = (data: any) => {
        console.log(data)
        reset()
    }

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

                <button className={style.form__container__button}>Войти</button>
            </form>

        </div>
    );
}

export default FormLogin