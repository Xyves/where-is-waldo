import 'primeicons/primeicons.css'
import { useEffect, useState } from 'react'

export default function TimerClock() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    let interval = null

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else {
      console.log(running)
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])
  return (
    <div className="fixed inset-x-0 top-0 mx-auto mt-8 flex h-16 w-32 items-center justify-center rounded-md bg-[#0FF4C6] px-20 text-[#464F51]">
      <i className="pi pi-clock mr-2 text-lg"></i>
      <span className="text-lg">
        {('0' + (Math.floor(time / 60000) % 60)).slice(-2)}
      </span>
      :
      <span className="text-lg">
        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
      </span>
      :
      <span className="text-lg">
        {('0' + Math.floor((time / 10) % 100)).slice(-2)}
      </span>
    </div>
  )
}
