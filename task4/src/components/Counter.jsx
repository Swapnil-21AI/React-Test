import React,{useState}from 'react'
import './Counter.css'

export default function Counter(){
    let [count,setCount]= useState(0)
    return(
        <div className='con'>
            <h1>Hello Devlopers! i am Counter</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count + 1)}>Increase</button>
            <button onClick={()=>setCount(count - 1)}>Decrease</button>
            <button onClick={()=>setCount(count = 0 )}>Reset</button>
        </div>
    )
}