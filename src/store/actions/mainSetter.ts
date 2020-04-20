/* eslint-disable class-methods-use-this */
import { store } from "./index";

class Main {
  addMessage(message: string = "", header: string = "") {
    store.dispatch({ type: "ADD_MESSAGE", message, header });
  }

  close() {
    store.dispatch({ type: "CLOSE_MESSAGE" });
  }

  change(view: string) {
    store.dispatch({ type: "CHANGE_VIEW", view });
  }

  spiner(isLoad: boolean = false) {
    if (isLoad) {
      //@ts-ignore
      window.timerSpiner = setTimeout(this.spiner, 60000);
    } else {
      //@ts-ignore
      clearTimeout(window.timerSpiner);
    }
    store.dispatch({ type: "LOADING", isLoad });
  }
}

const mainSetter = new Main();

export default mainSetter;
