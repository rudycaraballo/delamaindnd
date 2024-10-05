const { Client, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
],
});

console.log("Starting...");

client.on("ready", () => {
  console.log(`the bot is online!`);
});

client.on("messageCreate", (message) => {
  console.log("messageCreate");
  // get author info
  const authorId = message.author.id;
  const authorName = message.author.username;
  console.log(`author: ${authorName}`);
  if (message.content === "testdd") {
    message.reply({content: "test-response"});
  }
});

client.login(process.env.TOKEN);


