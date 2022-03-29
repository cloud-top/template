import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.tsx';
export default function App() {
  return (
    <div>
      <h2>我是react</h2>
      <Home />
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
