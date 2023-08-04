import { SubmitHandler, useForm } from "react-hook-form";
import { IShippingField } from "./form";
import style from './../style/form.module.css';

const FormRegister = () => {
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
                <h1 className={style.form__container__header}>Регистрация</h1>

                {/* name */}
                <input className={style.form__container__input}
                    {...(register(`name`, {
                        required: 'Введите имя',
                        maxLength: {
                            value: 20,
                            message: "Максимальная длинна 20 символов"
                        },
                        minLength: {
                            value: 3,
                            message: "Минимальная длинна 3 символа"
                        }
                    }))} type="text" placeholder="Имя"
                />
                {errors.name && <div className={style.form__container__error}>{errors.name.message}</div>}

                {/* surname */}
                <input className={style.form__container__input}
                    {...(register(`surname`, {
                        required: 'Введите фамилию',
                        maxLength: {
                            value: 20,
                            message: "Максимальная длинна 20 символов"
                        },
                        minLength: {
                            value: 3,
                            message: "Минимальная длинна 3 символа"
                        }
                    }))} type="text" placeholder="Фамилия"
                />
                {errors.surname && <div className={style.form__container__error}>{errors.surname.message}</div>}

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

                {/* confirmation */}
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
                    }))} type="password" placeholder="Подтверждение пароля;"
                />
                {errors.password && <div className={style.form__container__error}>{errors.password.message}</div>}

                {/* date */}
                <input className={style.form__container__input}
                    {...(register(`date`, {}))} type="date" placeholder="Дата рождения"
                />
                {errors.date && <div className={style.form__container__error}>{errors.date.message}</div>}

                <button className={style.form__container__button}>Зарегистрироваться</button>
            </form>

        </div>
    );
}

export default FormRegister







// <div className={style.form}>
// <div className={style.form__container}>
//     <h1 className={style.form__container__header}>Регистрация</h1>
//     <input className={style.form__container__input} type="text" placeholder="Имя" required />
//     <input className={style.form__container__input} type="text" placeholder="Фамилия" required />
//     <input className={style.form__container__input} type="email" placeholder="email" required />
//     <input className={style.form__container__input} type="password" placeholder="Пароль" required />
//     <input className={style.form__container__input} type="password" placeholder="Подтверждение пароля" required />
//     <input className={style.form__container__input} type="date" placeholder="Дата рождения" required />
//     <button className={style.form__container__button}>Зарегестрироваться</button>
// </div>
// </div>