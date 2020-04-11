import React, { useState } from 'react';
import { tokens, compose } from 'classy-ui';

const container = compose(tokens.height.FULL, tokens.margin.SPACE_130);
const heading = compose(tokens.color.GRAY_90, tokens.fontSize.SIZE_80);

const button = compose(
  tokens.paddingHorizontal.SPACE_40,
  tokens.paddingVertical.SPACE_20,
  tokens.backgroundColor.BLUE_50,
  tokens.color.WHITE,
  tokens.borderRadius.RADIUS_10,
);

const App = () => {
  const [count, setCount] = useState(0);

  //c('px-4', 'py-2', 'bg-blue-500', 'text-white', 'rounded-sm')
  return (
    <div className={container}>
      <h1 className={heading}>Hello Classy-UI!</h1>
      <p className={compose(tokens.marginBottom.SPACE_40)}>Count {count}</p>
      <button className={button} onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;
