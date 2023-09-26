"use client";
import Script from "next/script";

export default function Dashboard() {
  const initBotpress = () => {
    window?.botpressWebChat.init({
      composerPlaceholder: "Chat with bot!",
      botConversationDescription:
        "Chatbotbuilt built by Alex Howez with Botpress",
      botId: process.env.NEXT_PUBLIC_BOT_ID,
      hostUrl: process.env.NEXT_PUBLIC_BOT_HOST_URL,
      messagingUrl: "https://messaging.botpress.cloud",
      clientId: process.env.NEXT_PUBLIC_BOT_CLIENT_ID
    });
  };

  return (
    <>
      <Script
        src="https://cdn.botpress.cloud/webchat/v1/inject.js"
        onLoad={() => {
          initBotpress();
        }}
      />
    </>
  );
}
