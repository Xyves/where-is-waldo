import React, { createContext, useContext, useEffect, useState } from 'react'
interface Timer {
  time: number
  timerRunning: boolean
  setTimerRunning: (state: boolean) => void
  setTime: (time: number) => void
  loading: boolean
  error: string | null
}
const TimerContext = createContext<Timer>({
  time: 0,
  timerRunning: false,
  setTimerRunning: () => {},
  setTime: () => {},
  loading: true,
  error: null
})
export const TimerProvider = ({ children }) => {
  const [time, setTime] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [timerRunning, setTimerRunning] = useState<boolean>(true)
  const contextValue = {
    time,
    setTime,
    timerRunning,
    setTimerRunning,
    loading,
    error
  }
  return (
    <TimerContext.Provider value={contextValue}>
      {children}
    </TimerContext.Provider>
  )
}

export const useTimer = () => useContext(TimerContext)
