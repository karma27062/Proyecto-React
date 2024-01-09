import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contador de Clicks: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default ClickCounter;
