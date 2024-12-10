import TimerClock from 'components/Timer'
import React, { useContext } from 'react'
import { postScore } from 'utils'

export default function CreateScore() {
  const { time, timerRunning, setTimerRunning } = useContext(TimerClock)
  const submitForm = async (e) => {
    setTimerRunning(false)
    const username = FormData.get('username')
    e.preventDefault()
    await postScore(username, time)
  }
  return (
    <div>
      {/* w-300 h-600 name  */}
      <form action="" onSubmit={submitForm}>
        <label htmlFor="">username</label>
        <input type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}
