import * as ApplicationActions from './actions';
import { Statement } from '@angular/compiler/src/output/output_ast';

export interface State {
    isLoggedIn: boolean
}

const initialState: State = {
    isLoggedIn: true
};

export function reducer(state = initialState, action: ApplicationActions.All): State {
    switch (action.type) {
        case ApplicationActions.LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false
            }
        }

        case ApplicationActions.LOG_IN: {
            return {
                ...state,
                isLoggedIn: true
            }
        }

        default: {
            return state;
        }
    }
}
