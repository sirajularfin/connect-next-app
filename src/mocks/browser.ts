import { setupWorker } from 'msw/browser';

import { conversationApiHandlers } from './handlers/conversation.api';
import { profileApiHandler } from './handlers/profile.api';

export const worker = setupWorker(
  ...profileApiHandler,
  ...conversationApiHandlers
);
