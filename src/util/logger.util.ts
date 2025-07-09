const logger = (
  error: string,
  level: 'info' | 'log' | 'warn' | 'error' = 'log'
): void => {
  const now = new Date();
  const time = now.toTimeString().split(' ')[0]; // HH:mm:ss

  console[level](`[${level.toUpperCase()}][${time}] ${error}`);
};

export default logger;
