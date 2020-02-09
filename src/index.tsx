import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { c } from 'classy-ui';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={c('h-full', 'm-4')}>
      <h1 className={c('text-gray-900', 'text-2xl')}>Hello Classy-UI!</h1>
      <p className={c('mb-4')}>Count {count}</p>
      <button
        className={c('px-4', 'py-2', 'bg-blue-500', 'text-white', 'rounded-sm')}
        onClick={() => setCount(c => c + 1)}
      >
        Increment
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
