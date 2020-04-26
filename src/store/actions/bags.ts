import { dataSetExtractor } from "./../../commonFunction/extractors";
import { store } from "./index";
import { onCatch } from "../requests.ts/requestData";
import { Tbag } from "../reducers/bags";

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

  create() {}

  close() {
    store.dispatch({ type: "CLOSE_BAG" });
  }

  select(e: React.MouseEvent<HTMLElement>) {
    // const id = dataSetExtractor(e.currentTarget, "id");
    const id = e.currentTarget.dataset.id;
    const { bags } = store.getState().bags;
    const bag = bags.find((bag: Tbag) => bag._id === id);
    store.dispatch({ type: "SELECT_BAG", bag });
  }
}

const bagSetter = new Bags();

export default bagSetter;
