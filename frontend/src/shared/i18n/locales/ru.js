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
            channelManage: 'Управление каналом',
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
                channelExists: 'Должно быть уникальным'
            },
            messagesCount: {
                messages_one: "{{count}} сообщение",
                messages_few: "{{count}} сообщения",
                messages_many: "{{count}} сообщений",
                messages_other: "{{count}} сообщений",
            },
            newMessage: 'Новое сообщение',
        },
        notFound: {
            title: 'Страница не найдена',
        },
        errors: {
            auth: {
                conflict: "Такой пользователь уже существует",
                unauthorized: "Неверные имя пользователя или пароль",
            },
            serverError: 'Ошибка соединения',
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