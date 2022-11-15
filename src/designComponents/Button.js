import React,{useState} from 'react';

export default function Button() {
    const [message, setMessage] = useState("no swa");
    function handleClick(){
        setMessage("onclick message");
    }
  return (
    <div>
        <button onClick={handleClick}>Click ME</button>
        <h1>{message}</h1>
    </div>

  );
}
