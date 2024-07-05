import { useState } from "react";

function App() {
  const [timer , setTimer] = useState(5)
  function handleClick() {
    setTimer(prev=>prev-1) // first subtract
      const timerId = setInterval(()=>{
        setTimer((prev)=> {
          if(prev ==0) {
            clearInterval(timerId)
            return 5
          }
          return prev -1
        })
      }, 1000)
  }
  return <button id="otpButton" onClick={handleClick}>{timer ===5 ? 'Send Otp': timer}</button>;
}

export default App;
