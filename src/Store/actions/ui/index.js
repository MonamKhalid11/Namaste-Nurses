import * as TYPES from '../types';
export const showLoader = () => {
    return {
        type: TYPES.SHOW_LOADER
    }
}
export const hideLoader = () => {
    return {
        type: TYPES.HIDE_LOADER
    }
}
