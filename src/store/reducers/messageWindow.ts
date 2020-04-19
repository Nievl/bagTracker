const initialState = {
  show: false,
  header: "",
  message: "",
};

export default function messageWindow(state = initialState, action: any) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, show: true, message: action.message, header: action.header };
    case "CLOSE_MESSAGE":
      return { ...state, show: false, message: "", header: "" };
    default:
      return state;
  }
}

export type TmessageWindow = {
  show: boolean;
  header: string;
  message: string;
};
