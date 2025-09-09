import { UserProfile } from './profile.type';

export interface Conversation {
  id: number;
  lastMessage: string;
  lastActivity: string;
  participant: UserProfile;
}

export interface ConversationListResponse {
  conversations: Conversation[];
}

export interface ChatMessage {
  id: number;
  conversationId: number;
  sender: UserProfile;
  content: string;
  createdAt: string;
  isRead: boolean;
  isDeleted: boolean;
  isEdited: boolean;
}

export interface ChatMessagesResponse {
  messages: ChatMessage[];
}
