import { debounce } from "underscore";
import { onCatch } from "../requests/requestData";
import { Tbag } from "../reducers/bags";
import { store } from "../actions";
import bagAction from "../actions/bags";
import mainSetter from "../actions/mainSetter";

class Bags {
  get() {
    store.dispatch(bagAction.filter(""));
    fetch("/query/bags")
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          store.dispatch(bagAction.add(res.data));
        } else {
          throw new Error(res.description);
        }
      })
      .catch(onCatch);
  }

  filter = (e: React.FormEvent<HTMLInputElement>) => {
    e.persist();
    const value = e.currentTarget.value.trim();
    this.search(value);
    store.dispatch(bagAction.filter(value));
  };

  search = debounce((value: string) => {
    fetch(`/query/bags?search=${value}`)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          store.dispatch(bagAction.add(res.data));
        } else {
          throw new Error(res.description);
        }
      })
      .catch(onCatch);
  }, 500);

  openNew() {
    store.dispatch(bagAction.newBag());
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
    const id = e.currentTarget.dataset.id || "";
    store.dispatch(bagAction.select(id));
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
    store.dispatch(bagAction.close());
  }
}

const bagSetter = new Bags();

export default bagSetter;

type Taction1 = ReturnType<typeof bagSetter.get>;

export type Taction = Taction1;
