import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {removeProd} from "../actions/prod-details.actions";
import {ProductService} from "../../services/product-service";
import {of, from} from "rxjs";
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';


