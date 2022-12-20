import { createApp } from "./server";

//import { sendMessage } from "@medusa/sqs/dist";

export async function main() {
  try {
    const app = createApp();
    const port = process.env.PORT || 5001;

    return app.listen(port, () => {
      console.log(`listening on port: ${port}`);
    });
  } catch (err) {
    //todo: replace with logger
    console.error(err);
  }
}

process.on("uncaughtException", (reason) => {
  //todo: replace with logger
  //    if( app?.locals?.log ){
  //         const log = app.locals.log;
  //         log.error(`[UNCAUGHTEXCEPTION] ${reason}`);
  //    }
  console.log("here..", reason);
});

process.on("unhandledRejection", (reason) => {
  //todo: replace with logger
  // if( app?.locals?.log ){
  //     const log = app.locals.log;
  //     log.error(`[UNHANDLEDREJECTION] ${reason}`);
  // }
  console.log("here..", reason);
});

main();
