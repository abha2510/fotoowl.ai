import { id, i, init } from "@instantdb/react";

const APP_ID = "60ecf1c9-7e24-4a74-9194-be6695a2bf04";
const schema = i.schema({
  entities: {
    messages: i.entity({
      sender: i.string(),
      recipient: i.string(),
      message: i.string(),
      timestamp: i.number(),
    }),
    contacts: i.entity({
      name: i.string(),
      avatar: i.string(),
    }),
  },
});

const db = init({ appId: APP_ID, schema });

export const useInstantDB = () => {
  return db;
};
