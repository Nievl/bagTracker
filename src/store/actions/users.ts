import { Tuser } from "../reducers/users";

const userAction = {
  add: (users: Tuser[]) => <const>{ type: "ADD_USERS", users },
  filter: (value: string) => <const>{ type: "FILTER_USER", value },
  newUser: () => <const>{ type: "NEW_USER" },
  select: (id: string) => <const>{ type: "SELECT_USER", id },
  close: () => <const>{ type: "CLOSE_USER" },
  loading: () => <const>{ type: "LOADING_USER" },
};

export default userAction;

type valueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type TuserAction = ReturnType<valueTypes<typeof userAction>>;
