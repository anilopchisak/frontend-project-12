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
                    containLetter: 'Пароль не содержит латинских букв',
                    containNumber: 'Пароль не содержит цифр',
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
            auth: {
                conflict: "Пользователь с таким именем уже существует",
                unauthorized: "Проверьте корректность введённых данных",
            },
            serverError: 'Сервер недоступен. Проверьте интернет-соединение.',
            unknown: 'Неизвестная ошибка: не удалось загрузить данные.',
        },
        messages: {
            auth: {
                loginSuccess: "Успешный вход!",
                registerSuccess: "Регистрация прошла успешно!",
            },
            channel: {
                created: "Канал создан",
                renamed: "Канал переименован",
                deleted: "Канал удалён",
            },
            loading: 'Ждём ответ от сервера...'
        }
    }
}