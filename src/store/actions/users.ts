import { store } from "./index";
import { onCatch } from "../requests.ts/requestData";
import { Tuser } from "../reducers/users";
import mainSetter from "./mainSetter";

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
    return store.getState().users.list;
  }

  openNew() {
    store.dispatch({ type: "NEW_USER" });
  }

  create = (bag: Omit<Tuser, "_id">) => {
    console.log("bag: ", bag);
    fetch("/query/user", {
      method: "PUT",
      body: JSON.stringify(bag),
      headers: { "content-type": "application/json" },
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          mainSetter.addMessage("Юзер добавлен");
          this.get();
          this.close();
        } else {
          throw new Error(res.description);
        }
      })
      .catch(onCatch);
  };

  delete = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.dataset.id;
    fetch(`/query/user/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          mainSetter.addMessage("Пользователь удален");
          this.get();
          this.close();
        } else {
          throw new Error(res.description);
        }
      })
      .catch(onCatch);
  };

  filter(e: React.FormEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value);
  }

  close() {
    store.dispatch({ type: "CLOSE_USER" });
  }

  edit = (user: Tuser) => {
    fetch("/query/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          mainSetter.addMessage("Пользователь изменен");
          this.get();
          this.close();
        } else {
          throw new Error(res.description);
        }
      })
      .catch(onCatch);
  };

  select(e: React.MouseEvent<HTMLElement>) {
    const id = e.currentTarget.dataset.id;
    store.dispatch({ type: "SELECT_USER", id });
  }
}

const userSetter = new Users();

export default userSetter;
