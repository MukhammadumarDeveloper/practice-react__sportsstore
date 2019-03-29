export const CommonReducer = (...reducers) => (storeData, action) => {
    for (const reducer of reducers) {
        const newStore = reducer(storeData, action);
        if (newStore !== storeData) {
            return newStore;
        }
    }
    return storeData;
};
