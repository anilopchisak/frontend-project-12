export default {
    translation: {
        auth: {
            yup: {
                required: 'Обязательное поле',
                username: {
                    min: 'Минимум 3 символа',
                    max: 'Максимум 20 символов',
                },
                password: {
                    min: 'Минимум 6 символов',
                    containLetter: 'Пароль должен содержать хотя бы одну латинскую букву',
                    containNumber: 'Пароль должен содержать хотя бы одну цифру',
                },
                confirmPassword: {
                    mustMatch: 'Пароли не совпадают'
                },
            },
            elements: {
                username: 'Имя пользователя',
                password: 'Пароль',
                passwordConfirm: 'Подтвердите пароль',
                signupLink: 'Нет аккаунта? Зарегистрируйтесь',
                signupText: 'Регистрация',
                loginText: 'Войти',
            }
        },
        notFound: {
            elements: {
                text: 'Страница не найдена',
            },
        },
        chat: {

        }
    }
}
