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
        chat: {
            confirmMessage: 'Уверены? Действие необратимо.',
            titles: {
                channels: 'Каналы',
                deleteChannel: 'Удалить канал',
                renameChannel: 'Переименовать канал',
                addChannel: 'Создать новый канал',
            }, 
            placeholders: {
                newMessage: 'Введите сообщение...',
                newChannel: 'Введите название канала...',
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
            yup: {
                channelExists: 'Канал с таким именем уже существует'
            }
        },
        notFound: {
            title: 'Страница не найдена',
        },
        errors: {
            "auth": {
                "invalidCredentials": "Неверный логин или пароль",
                "tooManyAttempts": "Слишком много попыток входа. Попробуйте позже",
                "userExists": "Пользователь с таким именем уже существует",
                "invalidData": "Проверьте корректность введённых данных",
            },
            "chat": {
                "noPermission": "У вас нет прав для отправки сообщений",
            },
            "channel": {
                "noPermission": "Нет прав для изменения или удаления канала",
                "notFound": "Канал не найден",
            },
            "common": {
                "serverError": "Ошибка сервера. Попробуйте позже",
            },
        },
        messages: {
            "auth": {
                "loginSuccess": "Добро пожаловать, {{username}}!",
                "registerSuccess": "Регистрация прошла успешно!",
            },
            "channel": {
                "created": "Канал \"{{channelName}}\" создан",
                "updated": "Канал \"{{channelName}}\" переименован",
                "deleted": "Канал \"{{channelName}}\" удалён",
            }
        }
    }
}
