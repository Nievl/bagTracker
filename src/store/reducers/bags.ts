import { Tuser, emptyUser } from "./users";

export const emptyBag = {
  _id: "",
  name: "",
  status: "",
  description: "",
  userID: "",
  user: emptyUser,
};

const initialState = {
  list: [],
  selected: { ...emptyBag },
  card: false,
  isLoading: true,
  newCard: false,
  searchValue: "",
};

export default function bags(state: Tbags = initialState, action: any): Tbags {
  switch (action.type) {
    case "ADD_BAGS":
      return {
        ...state,
        list: action.bags,
        isLoading: false,
      };
    case "SELECT_BAG":
      return {
        ...state,
        selected: state.list.find(bag => bag._id === action.id) || { ...emptyBag },
        card: true,
      };
    case "CLOSE_BAG":
      return {
        ...state,
        selected: { ...emptyBag },
        card: false,
        newCard: false,
      };
    case "FILTER_BAG":
      return { ...state, searchValue: action.value, isLoading: true };
    case "LOADING_BAG":
      return { ...state, isLoading: true };
    case "NEW_BAG":
      return { ...state, newCard: true };
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
  user?: Tuser;
};

export type Tbags = {
  list: Array<Tbag>;
  selected: Tbag;
  card: boolean;
  isLoading: boolean;
  newCard: boolean;
  searchValue: string;
};

type Taction = {
  type: string;
  bags?: Array<Tbag>;
  id?: string;
};
