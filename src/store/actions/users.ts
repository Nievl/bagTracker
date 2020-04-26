import { store } from "./index";
import { onCatch } from "../requests.ts/requestData";

class Users {
  get() {
    fetch("/query/users")
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          store.dispatch({ type: "ADD_USERS", users: res.data });
        } else {
          throw new Error(res.description);
        }
      })
      .catch(onCatch);
  }

  getFromStore() {
    return store.getState().users.users;
  }

  filter(e: React.FormEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value);
  }

  close() {
    store.dispatch({ type: "CLOSE_USER" });
  }

  select(id: string) {
    store.dispatch({ type: "SELECT_USER", user: id });
  }
}

const userSetter = new Users();

export default userSetter;
