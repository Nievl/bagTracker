export const emptyUser: Tuser = {
  _id: "",
  name: "",
};

const initialState: Tusers = {
  users: [],
  selected: { ...emptyUser },
  card: false,
  isLoading: true,
  newCard: false,
};

export default function users(state = initialState, action: any) {
  switch (action.type) {
    case "ADD_USERS":
      return {
        ...state,
        users: action.users,
        isLoading: false,
      };
    case "SELECT_USER":
      return { ...state, selected: action.user, card: true };
    case "CLOSE_USER":
      return {
        ...state,
        selected: { ...emptyUser },
        card: false,
        newCard: false,
      };
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
  users: Tuser[];
  selected: Tuser;
  card: boolean;
  isLoading: boolean;
  newCard: boolean;
};
