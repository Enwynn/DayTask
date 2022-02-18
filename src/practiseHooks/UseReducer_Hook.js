import React, {useReducer} from "react";

const UseReducer2_Hook = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {count: state.count + 1, showText: state.showText};
            case "toggleShowText":
                return {count: state.count, showText: !state.showText}
            default:
                return state
        }
    };
    const [state, dispatch] = useReducer(reducer,
        {count: 0,
        showText: false});

    return (
        <div>
            <h1> {state.count} </h1>
            <button
                onClick={() =>{
                    dispatch({type: "INCREMENT"});
                    dispatch({type: "toggleShowText"})
                }}
            >
               Click me
            </button>

            {state.showText && <p>Hello World</p>}
        </div>
    )
};

export default UseReducer2_Hook;