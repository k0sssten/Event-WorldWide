require("dotenv").config();
const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.TELEGRAM_TOKEN_EDU) //сюда помещается токен, который дал botFather
const axios = require('axios')
const apiUrl = 'http://localhost:3001/api/v1/subscribes'

//ответ бота на команду /start
bot.start(ctx => ctx.reply(`
   Привет, ${ctx.from.first_name}!
Введи команду /events и получи список своих избранных событий.
`))

//ответ бота на команду /whoami
bot.command("whoami", (ctx) => {
  const { id, username, first_name, last_name } = ctx.from;
  return ctx.replyWithMarkdown(`Кто ты в телеграмме:
*id* : ${id}
*username* : ${username}
*Имя* : ${first_name}
*Фамилия* : ${last_name}
*chatId* : ${ctx.chat.id}`);
});

bot.help((ctx) => ctx.reply('Send me a sticker')) //ответ бота на команду /help
bot.on('sticker', (ctx) => ctx.reply('')) //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
bot.hears('hi', (ctx) => ctx.reply(`Hello, ${ctx.from.first_name}!`)) // bot.hears это обработчик конкретного текста, данном случае это - "hi"


bot.command('events', async (ctx) => {
  try {
    const events = await axios(apiUrl)
    const data = events.data

    data.forEach((element) => {
      setTimeout(() => {
        ctx.reply(`${element.Event.Name} \n${element.Event.Url}\n${element.Event.Picture}\n${element.Event.Startdatetime}\n`)
      }, 1000)
    })
  } catch (e) {
    ctx.reply('Текущих событий нет')
  }
})

bot.launch() // запуск бота
