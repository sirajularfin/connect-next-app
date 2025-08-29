import bcrypt from 'bcryptjs';

export const generateHashedMessage = async (args: string): Promise<string> => {
  const hashedMessage = await bcrypt.hash(args, 12);
  return hashedMessage;
};

export const compareHashedMessage = async (
  args: string,
  hashedMessage: string
): Promise<boolean> => {
  const isValid = await bcrypt.compare(args, hashedMessage);
  return isValid;
};
