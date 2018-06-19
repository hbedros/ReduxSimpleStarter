import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBlF_RZI6IqEx9QqLcfuKHLO6Si4t-UZhk';

const App = () => {
     return 
    <div>
        <SearchBar />
    </div>;
 }

 ReactDOM.render(<App />, document.querySelector('.container'));