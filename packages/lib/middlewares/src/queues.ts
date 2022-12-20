const handleQueueException = (
  publishFunc: Promise<void>,
  _logger?: void,
  _loggingId?: string
) => {
  publishFunc.catch((err: any) => {
    // todo: log error
    console.log(err);

    throw new Error(err);
  });
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const tmpFn = async () => {};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const sendEmail = (_payload: any) => {
  return handleQueueException(tmpFn());
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const publishCallbackEvent = (_payload: any) => {
  return handleQueueException(tmpFn());
};
