import React, { useState } from 'react';





export const Counter = () => {
    const [state, setState] = useState(10);

    const decrement = () => {
        setState(state - 1);
    }
    const increment = () => {
        setState(state + 1);
    }
    return (
        <div>
            <p>Hello world!</p>
            <p>Count: {state}</p>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
        </div >
    );
};


// export class CounterClass extends React.Component {

//     state = {
//         count: 0
//     };
//     constructor(props) {
//         super(props);

//         this.state = {
//             conut: 0
//         }
//     }



//     componentDidMount() {
//         console.log('1works');
//     }
//     componentDidUpdate() {
//         console.log('2works');
//     }
//     componentWillUnmount() {
//         console.log('3works');
//     }
//     increment = () => {
//         this.setState({
//             count: this.state.count + 1,
//         });
//     }
//     decrement = () => {
//         this.setState({
//             count: this.state.count + 1,
//         });
//     }



// }