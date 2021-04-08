import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/counter";
import { fetchUserById } from "../store/user";

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserById(count));
    }, [count]);
    useEffect(() => {
        alert(JSON.stringify(user));
    }, [user]);

    return (
        <div>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    );
}
