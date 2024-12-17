import 'primeicons/primeicons.css'
import { createContext, useContext, useEffect, useState } from 'react'
import { TimerProvider, useTimer } from './Context/TimerContext'

export default function Timer({ children }) {
  const { timerRunning, setTimerRunning, time, setTime } = useTimer()

  useEffect(() => {
    let interval = null
    setTimerRunning(true)
    if (timerRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else {
      console.log(timerRunning)
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerRunning])
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
