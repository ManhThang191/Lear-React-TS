import React, { useEffect, useState } from 'react'

function EffectDemo() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`Count change ${count}`);
    },[count])

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> setCount(count + 1)}>
            + 1
        </button>
    </div>
  )
}

export default EffectDemo