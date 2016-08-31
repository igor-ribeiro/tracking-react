import {
    REQUEST_TRACKING_INFORMATION,
    RECEIVE_TRACKING_INFORMATION,
    RECEIVE_TRACKING_ERROR,
    UPDATE_TRACKING_CODE,
} from '../actions/tracking-actions';

const initial = {
    code: '',
    information: [],
    error: '',
    isLoading: false,
};

function tracking (state = initial, action) {
    switch (action.type) {
        case REQUEST_TRACKING_INFORMATION:
            return Object.assign({}, state, {
                isLoading: true,
            });

        case RECEIVE_TRACKING_INFORMATION:
            return Object.assign({}, state, {
                isLoading: false,
                information: action.information,
                error: '',
            });

        case RECEIVE_TRACKING_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error,
                information: [],
            });

        case UPDATE_TRACKING_CODE:
            return Object.assign({}, state, {
                code: action.code,
            });

        default:
            return state;
    }
}

export default tracking;
