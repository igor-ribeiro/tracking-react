import trackingApi from '../mocks/tracking-api';

// Constants
export const REQUEST_TRACKING_INFORMATION = 'REQUEST_TRACKING_INFORMATION';
export const RECEIVE_TRACKING_INFORMATION = 'RECEIVE_TRACKING_INFORMATION';
export const RECEIVE_TRACKING_ERROR = 'RECEIVE_TRACKING_ERROR';

export const UPDATE_TRACKING_CODE = 'UPDATE_TRACKING_CODE';

export function fetchTrackingInformation (code) {
    return (dispatch) => {
        const information = trackingApi[code];
        const error = `No tracking information found for "${code}" code.`;

        dispatch(requestTrackingInformation());

        setTimeout(() => {
            if (information) {
                return Promise.resolve(information)
                    .then(
                        (information) => dispatch(receiveTrackingInformation(information))
                    );
            } else {
                return Promise.reject(error)
                    .then(
                        () => {},
                        (error) => dispatch(receiveTrackingError(error))
                    );
            }
        }, 2000);
    };
};

export function requestTrackingInformation (code) {
    return { type: REQUEST_TRACKING_INFORMATION };
}

export function receiveTrackingInformation (information) {
    return { type: RECEIVE_TRACKING_INFORMATION, information };
}

export function receiveTrackingError (error) {
    return { type: RECEIVE_TRACKING_ERROR, error };
}

export function updateTrackingCode (code) {
    return { type: UPDATE_TRACKING_CODE, code };
}
