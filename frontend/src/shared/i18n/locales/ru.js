export default {
    translation: {
        auth: {
            form: {
                username: 'Имя пользователя',
                password: 'Пароль',
                confirmPassword: 'Подтвердите пароль',
            },
            links: {
                signupPrompt: 'Нет аккаунта? Зарегистрируйтесь',
            },
            titles: {
                signup: 'Регистрация',
                login: 'Войти',
                logout: 'Выйти',
            },
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
                    mustMatch: 'Пароли не совпадают',
                },
            },
        },
        notFound: {
            title: 'Страница не найдена',
        },
        
        chat: {
            confirmMessage: 'Уверены? Действие необратимо.',
            titles: {
                channels: 'Каналы',
                deleteChannel: 'Удалить канал',
                renameChannel: 'Переименовать канал',
            }, 
            placeholders: {
                newMessage: 'Введите сообщение...',
                newName: 'Введите название канала...',
                selectChannel: 'Выберите канал',
                startChat: 'Напишите первое сообщение!'
            },
            buttons: {
                addChannel: 'Добавить',
                deleteChannel: 'Удалить',
                renameChannel: 'Переименовать',
                cancel: 'Отмена',
                send: 'Отправить',
            },
        }
    }
}
