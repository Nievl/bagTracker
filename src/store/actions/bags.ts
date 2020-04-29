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
  filter(e: string) {
    // console.log(e);
    const value = e.trim();
    store.dispatch({ type: "LOADING_BAG" });
    fetch(`/query/bags?search=${value}`)
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

  openNew() {
    store.dispatch({ type: "NEW_BAG" });
  }

  create = (bag: Omit<Tbag, "_id">) => {
    // console.log("bag: ", bag);
    fetch("/query/bag", {
      method: "PUT",
      body: JSON.stringify(bag),
      headers: { "content-type": "application/json" },
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          mainSetter.addMessage("Баг добавлен");
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
    store.dispatch({ type: "SELECT_BAG", id });
  }

  edit = (bag: Tbag) => {
    console.log("bag: ", bag);
    fetch("/query/bag", {
      method: "POST",
      body: JSON.stringify(bag),
      headers: { "content-type": "application/json" },
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          mainSetter.addMessage("Баг изменен");
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
    fetch(`/query/bag/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          mainSetter.addMessage("Баг удален");
          this.get();
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
}

const bagSetter = new Bags();

export default bagSetter;
