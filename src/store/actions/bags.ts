import { Tbag } from "../reducers/bags";

const bagAction = {
  add: (bags: Tbag[]) => <const>{ type: "ADD_BAGS", bags },
  filter: (value: string) => <const>{ type: "FILTER_BAG", value },
  newBag: () => <const>{ type: "NEW_BAG" },
  select: (id: string) => <const>{ type: "SELECT_BAG", id },
  close: () => <const>{ type: "CLOSE_BAG" },
  loading: () => <const>{ type: "LOADING_BAG" },
};

export default bagAction;

type valueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type TbagAction = ReturnType<valueTypes<typeof bagAction>>;
