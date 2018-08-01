import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <div>Hi!</div>;
}

//rendering in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));