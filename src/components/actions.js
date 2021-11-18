export const GETDATA = 'GETDATA';
export const getData = text => ({
    type: GETDATA,
    payload: { text }
})

export const RESET = 'RESET';
export const reset = () => ({
    type: RESET
})

export const ERRORMSG = 'ERRORMSG';
export const errormsg = () => ({
    type: ERRORMSG
})