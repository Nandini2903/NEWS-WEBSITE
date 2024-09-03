import React from 'react';
import News from './components/News';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>News Website</h1>
            </header>
            <main>
                <News />
            </main>
        </div>
    );
}

export default App;

