export default {
    translation: {
        auth: {
            form: {
                userNick: 'Ваш ник',
                username: 'Имя пользователя',
                password: 'Пароль',
                confirmPassword: 'Подтвердите пароль',
            },
            links: {
                signupPrompt: 'Нет аккаунта?',
            },
            titles: {
                signup: 'Регистрация',
                login: 'Вход',
            },
            buttons: {
                signup: 'Зарегистрироваться',
                login: 'Войти',
                logout: 'Выйти',
            },
            yup: {
                required: 'Обязательное поле',
                username: {
                    minMax: 'От 3 до 20 символов',
                    min: 'Минимум 3 символа',
                    max: 'Максимум 20 символов',
                },
                password: {
                    min: 'Не менее 6 символов',
                    containLetter: 'Пароль не содержит латинских букв',
                    containNumber: 'Пароль не содержит цифр',
                },
                confirmPassword: {
                    mustMatch: 'Пароли должны совпадать',
                },
            },
        },
        chat: {
            confirmMessage: 'Уверены?',
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
            labels: {
                channelName: 'Имя канала',

            },
            buttons: {
                addChannel: 'Добавить',
                deleteChannel: 'Удалить',
                renameChannel: 'Переименовать',
                cancel: 'Отменить',
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
                unauthorized: "Неверные имя пользователя или пароль",
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