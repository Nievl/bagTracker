import { store } from "./index";
import { onCatch } from "../requests.ts/requestData";
import { Tbag } from "../reducers/bags";
import mainSetter from "./mainSetter";

class Bags {
  get() {
    fetch("/query/bags")
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          store.dispatch({ type: "ADD_BAGS", bags: res.data });
        } else {
          throw new Error(res.description);
        }
      })
      .catch(onCatch);
  }
  filter(e: React.FormEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value);
  }

  openNew() {
    store.dispatch({ type: "NEW_BAG" });
  }

  create = (bag: Omit<Tbag, "_id">) => {
    console.log("bag: ", bag);
    fetch("/query/bag", {
      method: "PUT",
      body: JSON.stringify(bag),
      headers: { "content-type": "application/json" },
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          mainSetter.addMessage("Баг добавлен");
          this.close();
        } else {
          throw new Error(res.description);
        }
      })
      .catch(onCatch);
  };

  close() {
    store.dispatch({ type: "CLOSE_BAG" });
  }

  select(e: React.MouseEvent<HTMLElement>) {
    const id = e.currentTarget.dataset.id;
    store.dispatch({ type: "SELECT_BAG", id });
  }
}

const bagSetter = new Bags();

export default bagSetter;
