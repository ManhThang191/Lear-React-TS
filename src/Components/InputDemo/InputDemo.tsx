import React from 'react'
import { useState } from 'react'


function InputDemo() {
    const [text, setText] = useState("")

    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)}/>
            <p>
                ban nhap : {text}
            </p>
        </div>
    
  )
}

export default InputDemo