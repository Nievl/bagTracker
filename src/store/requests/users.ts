import { debounce } from "underscore";
import { onCatch } from "../requests/requestData";
import { Tuser } from "../reducers/users";
import userAction from "../actions/users";
import { store } from "../actions";
import mainSetter from "../actions/mainSetter";

class Users {
  get() {
    store.dispatch(userAction.filter(""));
    fetch("/query/users")
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          store.dispatch(userAction.add(res.data));
        } else {
          throw new Error(res.description);
        }
      })
      .catch(onCatch);
  }

  getFromStore = () => store.getState().users.list;

  openNew = () => store.dispatch(userAction.newUser());

  create = (bag: Omit<Tuser, "_id">) => {
    // console.log("bag: ", bag);
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

  filter = (e: React.FormEvent<HTMLInputElement>) => {
    e.persist();
    const value = e.currentTarget.value.trim();
    this.search(value);
    store.dispatch(userAction.filter(value));
  };

  search = debounce((value: string) => {
    fetch(`/query/users?search=${value}`)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          store.dispatch(userAction.add(res.data));
        } else {
          throw new Error(res.description);
        }
      })
      .catch(onCatch);
  }, 500);

  close = () => store.dispatch(userAction.close());

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
    const id = e.currentTarget.dataset.id || "";
    store.dispatch(userAction.select(id));
  }
}

const userSetter = new Users();

export default userSetter;
