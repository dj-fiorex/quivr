"use client";

import { ChatHistory } from "@/lib/components/ChatHistory/ChatHistory";
import { Sidebar } from "@/lib/components/Sidebar/Sidebar";
import { useOnboarding } from "@/lib/hooks/useOnboarding";

import { NewChatButton } from "./components/NewChatButton";
import { WelcomeChat } from "./components/WelcomeChat";
import { useChatNotificationsSync } from "./hooks/useChatNotificationsSync";
import { useChatsList } from "./hooks/useChatsList";

export const ChatsList = (): JSX.Element => {
  useChatsList();
  useChatNotificationsSync();
  const { shouldDisplayWelcomeChat } = useOnboarding();

  return (
    <Sidebar showButtons={["myBrains", "marketplace", "upgradeToPlus", "user"]}>
      <div className="flex flex-col flex-1 h-full" data-testid="chats-list">
        <div className="pt-2">
          <NewChatButton />
        </div>
        {shouldDisplayWelcomeChat && (
          <div className="pt-2">
            <WelcomeChat />
          </div>
        )}
        <ChatHistory />
      </div>
    </Sidebar>
  );
};
