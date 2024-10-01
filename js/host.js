import TelegramBot from 'node-telegram-bot-api';
import express from 'express';

const app = express();
const token = '7700449957:AAHgFLxoRS7aDebn1cqM_RclUT_DJlDo23M';
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привіт! Грати можна за цим посиланням: [Золотая Лихорадка](https://ваш_сайт.com)', { parse_mode: 'Markdown' });
});

// Запуск сервера
app.listen(3000, () => {
    console.log('Сервер запущен на http://localhost:3000');
});
