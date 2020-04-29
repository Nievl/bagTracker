export const emptyUser = {
  _id: "",
  name: "",
};

const initialState = {
  list: [],
  selected: { ...emptyUser },
  card: false,
  isLoading: true,
  newCard: false,
  searchValue: "",
};

export default function users(state: Tusers = initialState, action: any): Tusers {
  switch (action.type) {
    case "ADD_USERS":
      return {
        ...state,
        list: action.users,
        isLoading: false,
        searchValue: "",
      };
    case "SELECT_USER":
      return {
        ...state,
        selected: state.list.find(user => user._id === action.id) || { ...emptyUser },
        card: true,
      };
    case "CLOSE_USER":
      return {
        ...state,
        selected: { ...emptyUser },
        card: false,
        newCard: false,
      };
    case "FILTER_USER":
      return { ...state, isLoading: true, searchValue: action.value };
    case "NEW_USER":
      return { ...state, newCard: true };
    case "LOADING_USER":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export type Tuser = {
  _id: string;
  name: string;
};

export type Tusers = {
  list: Tuser[];
  selected: Tuser;
  card: boolean;
  isLoading: boolean;
  newCard: boolean;
  searchValue: string;
};
