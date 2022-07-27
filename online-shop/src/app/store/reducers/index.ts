import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "../state/app.state";
import {productReducer} from "./product.reducers";

export const reducers: ActionReducerMap<AppState> = {
  productsState: productReducer
};
