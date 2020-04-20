/* eslint-disable no-return-await */
import mainSetter from "../actions/mainSetter";

// export function requestData({ uri, success, reject }) {
//   fetch(`/query/${uri}`)
//     .then(res => res.json())
//     .then(res => {
//       if (res.result !== "error") {
//         if (success) success(res.result);
//       } else {
//         mainSetter.addMessage(res.description, "Ошибка");
//         if (reject) reject();
//       }
//       mainSetter.spiner();
//       return false;
//     })
//     .catch(err => {
//       mainSetter.spiner();
//       console.log(err.message);
//     });
// }

// export const sendData = async ({ uri, data }) => {
//   return await fetch(`/${uri}`, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { token: authConstruct.getRoot() },
//   })
//     .then(res => res.json())
//     .then(res => {
//       if (res) return res;
//       return { result: "error", description: "Неизвестная сетевая ошибка" }; // если нет тела ответа
//     })
//     .catch(err => {
//       mainSetter.spiner();
//       console.error(err.message);
//     });
// };

// export const requestDataSync = async request => {
//   return await fetch(`/${request}`, { headers: { token: authConstruct.getRoot() } })
//     .then(authHandler)
//     .then(res => {
//       if (res) return res;
//       return { result: "error", description: "Неизвестная сетевая ошибка" }; // если нет тела ответа
//     })
//     .catch(err => {
//       console.error(err.message);
//       return { result: "error", description: err.message }; // если нет тела ответа
//     });
// };

// export function onThen(action) {
//   return data => {
//     if (data === "OK") {
//       action();
//     } else if (data.description) {
//       throw new Error(`Ошибка.${data.description}`);
//     } else {
//       throw new Error("Ошибка.");
//     }
//   };
// }

export function onCatch(err: Error) {
  mainSetter.addMessage(err.message, "Ошибка");
  console.error(err.message);
}
