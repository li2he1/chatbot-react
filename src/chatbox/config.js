import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Hello. What do you want to learn`)]
};

export default config;
