import { store } from "./index";
import { onCatch } from "../requests.ts/requestData";

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

  close() {
    store.dispatch({ type: "CLOSE_BAG" });
  }
  select(id: string) {
    store.dispatch({ type: "SELECT_BAG", bag: id });
  }
}

const bagSetter = new Bags();

export default bagSetter;
