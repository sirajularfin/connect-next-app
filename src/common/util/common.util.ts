export const isEmpty = (args: unknown): boolean => {
  return (
    args === '' ||
    args === null ||
    args === undefined ||
    (typeof args === 'object' && Object.keys(args).length === 0)
  );
};

export function formatJson(args: string) {
  try {
    return JSON.stringify(JSON.parse(args), null, 2);
  } catch {
    return args;
  }
}
