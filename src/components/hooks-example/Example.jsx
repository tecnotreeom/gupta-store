import React, {useState, useEffect} from 'react'



const Example = () => {
    // declare new state variables , which we will call count

    const [count, setCount] = useState(0);
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    // useEffect similer to componentDidMount and componentDidUpdate

    useEffect( () => {
        //update the document title using the browser API
        console.log('hi use effect');
        document.title = `You clicked ${count} times`;
    }

    );
    return (
        <div className="">
            <p className="">you clicked {count} times</p>
            <button onClick = {() => setCount(count + 1)}>
                click me
            </button>
        </div>
    )
}

export default Example;