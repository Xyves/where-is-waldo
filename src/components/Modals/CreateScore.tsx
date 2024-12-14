import TimerClock from 'components/Timer'
import React, { createContext, useContext, useState } from 'react'
import { postScore } from 'utils'

export default function CreateScore({ showDialog, setShowDialog }) {
  const contextValue = {
    time,
    timerRunning,
    setTimerRunning
  }
  const scoreContext = createContext()
  const [modalActive, setModalActive] = useState(false)
  const submitForm = async (e) => {
    setTimerRunning(false)
    const username = FormData.get('username')
    e.preventDefault()
    await postScore(username, time)
    setShowDialog(false)
  }
  return (
    <scoreContext.Provider value={contextValue}>
      <div>
        {/* w-300 h-600 name  */}
        <dialog id="scoreModal">
          <form action="" onSubmit={submitForm}>
            <label htmlFor="">username</label>
            <input type="text" />
            <button id="submitModal">Submit</button>
          </form>
        </dialog>
      </div>
    </scoreContext.Provider>
  )
}
