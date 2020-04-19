const initialState = {
  loading: false,
  view: "bags",
};

export default function view(state = initialState, action: any) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: action.loading };
    case "CHANGE_VIEW":
      return { ...state, view: action.view };
    default:
      return state;
  }
}

export type Tview = {
  loading: boolean;
  view: string;
};
