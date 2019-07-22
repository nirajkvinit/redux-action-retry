import { Reducer, AnyAction } from 'redux';
import { State } from '../index';
export interface ReducerProtocol<U = {}> {
  reducer: (initializedExtensions: any[]) => Reducer<State<U>, AnyAction>;
}

export function isReducerProtocol<U>(extension: any): extension is ReducerProtocol<U> {
  return 'reducer' in extension
}