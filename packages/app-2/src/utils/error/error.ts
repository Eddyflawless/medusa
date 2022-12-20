export class UserError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export type ContructorType<T> = new (...args: any[]) => T;

function createError<E extends Error>(
  error: ContructorType<E>,
  ...args: any[]
): E {
  return new error(...args);
}

export default createError;
