const initialState = {
  bags: [],
  selected: {
    _id: "",
    name: "",
    status: "",
    description: "",
    userID: "",
  },
  card: false,
  isLoading: true,
};

export default function bags(state = initialState, action: any) {
  switch (action.type) {
    case "ADD_BAGS":
      return {
        ...state,
        bags: action.bags,
        isLoading: false,
      };
    case "SELECT_BAG":
      return { ...state, selected: action.bag, card: true };
    case "CLOSE_BAG":
      return {
        ...state,
        selected: {
          _id: "",
          name: "",
          status: "",
          description: "",
          userID: "",
        },
        card: false,
      };
    case "LOADING_BAG":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export type Tbag = {
  _id: string;
  name: string;
  status: string;
  description: string;
  userID: string;
};

export type Tbags = {
  bags: Tbag[] | [];
  selected: Tbag;
  card: boolean;
  isLoading: boolean;
};
