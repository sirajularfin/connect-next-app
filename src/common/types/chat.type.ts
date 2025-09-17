import { IPaginatedResult } from './pagination.type';
import { UserProfile } from './profile.type';

export interface IConversation {
  id: number;
  lastMessage: string;
  lastActivity: string;
  participant: UserProfile;
}

export interface IChatMessage {
  id: number;
  conversationId: number;
  senderId: number;
  content: string;
  createdAt: string;
  isRead: boolean;
  isDeleted: boolean;
  isEdited: boolean;
}

export type TChatMessagesResponse = {
  sender: UserProfile;
  messages: IPaginatedResult<IChatMessage>;
};
export type TConversationListResponse = IPaginatedResult<IConversation>;
