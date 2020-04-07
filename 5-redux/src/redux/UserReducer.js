const INITIAL_STATE = {
    userName: null
};

const userReducer = (previousState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...previousState,
                userName: action.payload
            };

        default: return previousState;
    }
};

export default userReducer