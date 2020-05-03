import mainSetter from "../actions/mainSetter";

export function onCatch(err: Error) {
  mainSetter.addMessage(err.message, "Ошибка");
  console.error(err.message);
}
