import { types } from "../types/types";

export const uiSetError = (err) =>({
    type : types.uiSetError,
    payload : err
});

export const uiRemoveError = () => ({
    type : types.uiRemoveError
});

export const startLoading = () =>({
    type : types.uniStartLoading
});
 export const finishLoading = () => ({
    type : types.uiFinishLoading
 });