import 'primeicons/primeicons.css'
import { useEffect } from 'react'
import { useTimer } from './Context/TimerContext'

export default function Timer({ timerActive }) {
  const { time, setTime } = useTimer()

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    // If the timer is running, start the interval
    if (timerActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10) // Update time every 10ms
      }, 10)
    } else {
      // If timerRunning is false, clear the interval
      if (interval) {
        clearInterval(interval)
      }
    }

    // Cleanup the interval when the component unmounts or when timerRunning changes
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [timerActive, setTime])
  return (
    <div className="fixed inset-x-0 top-0 mx-auto mt-8 flex h-16 w-40 select-none items-center justify-center rounded-md bg-[#1e293b]  px-20 text-white ">
      <i className="pi pi-clock mr-2 text-xl"></i>
      <span className="text-xl ">
        {('0' + (Math.floor(time / 60000) % 60)).slice(-2)}
      </span>
      :
      <span className="text-xl">
        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
      </span>
      :
      <span className="text-xl">
        {('0' + Math.floor((time / 10) % 100)).slice(-2)}
      </span>
    </div>
  )
}
