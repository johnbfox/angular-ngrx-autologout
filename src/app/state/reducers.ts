import * as fromApplication from './application/reducer';

export interface State {
    application: fromApplication.State;
}

export const reducers = {
    application: fromApplication.reducer
};

export function selectIsLoggedIn(state: State) {
    return state.application.isLoggedIn;
}