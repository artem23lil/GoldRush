const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_TELEGRAM_BOT_TOKEN' на токен вашего бота
const token = '7700449957:AAHgFLxoRS7aDebn1cqM_RclUT_DJlDo23M';
const bot = new TelegramBot(token, { polling: true });

// Команда для начала игры
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const options = {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Начать игру", url: "https://github.com/artem23lil/GoldRush" }]
            ]
        }
    };
    bot.sendMessage(chatId, "Добро пожаловать в Золотую Лихорадку! Нажмите кнопку ниже, чтобы начать игру.", options);
});

// Остальной код...
