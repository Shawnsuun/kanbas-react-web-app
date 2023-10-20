import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";

function WorkingWithFunctions() {
    function add(a, b) {
        return a + b;
    }

    const twoPlusFour = add(2, 4);
    console.log(twoPlusFour);

    return (
        <>
            <h2>Functions</h2>
            <h3>Legacy ES5 functions</h3>
            twoPlusFour = {twoPlusFour}<br />
            add(2, 4) = {add(2, 4)}<br />
            <ArrowFunctions />
            <ImpliedReturn />
            <FunctionParenthesisAndParameters />
        </>
    )
}

export default WorkingWithFunctions;