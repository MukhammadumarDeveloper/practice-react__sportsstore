const isPromise = payload => (typeof payload === 'object' || typeof payload === 'function') && typeof payload.then === 'function';

export const asyncActions = () => (next) => (action) => {
    if (action.payload && isPromise(action.payload)) {
        action.payload.then(result => next({...action, payload: result}));
    }
    else if (action.payload && action.payload.data && isPromise(action.payload.data)) {
        action.payload.data.then(result => next({...action, payload: result}));
    }
    else {
        next(action);
    }
};
