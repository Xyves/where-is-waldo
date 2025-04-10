//@ts-nocheck
import 'primeicons/primeicons.css'

import { useEffect } from 'react'
import { useTimer } from './Context/TimerContext'

export default function Timer({ timerActive }: { timerActive: boolean }) {
  const { time, setTime } = useTimer()

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (timerActive) {
      interval = setInterval(() => {
        setTime((prevTime: number) => prevTime + 10)
      }, 10)
    } else {
      if (interval) {
        clearInterval(interval)
      }
    }

    // Cleanup the interval on component unmounts / timerRunning is false
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
