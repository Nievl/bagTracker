import { Tuser } from "./users";

export const emptyBag: Tbag = {
  _id: "",
  name: "",
  status: "",
  description: "",
  userID: "",
  user: [],
};

const initialState: Tbags = {
  bags: [],
  selected: { ...emptyBag },
  card: false,
  isLoading: true,
  newCard: false,
};

export default function bags(state: Tbags = initialState, action: any) {
  switch (action.type) {
    case "ADD_BAGS":
      return {
        ...state,
        bags: action.bags,
        isLoading: false,
      };
    case "SELECT_BAG":
      return {
        ...state,
        selected: state.bags.find(bag => bag._id === action.id),
        card: true,
      };
    case "CLOSE_BAG":
      return {
        ...state,
        selected: { ...emptyBag },
        card: false,
        newCard: false,
      };
    case "LOADING_BAG":
      return { ...state, isLoading: true };
    case "NEW_BAG":
      return { ...state, newCard: true };
    default:
      return state;
  }
}

export interface Tbag {
  _id: string;
  name: string;
  status: string;
  description: string;
  userID: string;
  user: Tuser[];
}

export interface Tbags {
  bags: Array<Tbag>;
  selected: Tbag;
  card: boolean;
  isLoading: boolean;
  newCard: boolean;
}
