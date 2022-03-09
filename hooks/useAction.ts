import { AsyncThunk, unwrapResult } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useAsyncAction = <Arg, Returned>(actionCreator: AsyncThunk<Returned, Arg, {}>) => {
    const dispatch = useDispatch<any>();

    return useCallback(
        (arg: Arg) =>
            dispatch(actionCreator(arg))
                .then((result: any) => unwrapResult(result))
                .catch((err: any) => Promise.reject(err)),
        [dispatch, actionCreator],
    );
};
