import {createAction, props} from '@ngrx/store';
import {Product} from "../../models/products";

export const removeProd = createAction(
  '[Prod Details] Remove Prod',
  props<{ id: number }>()
);
