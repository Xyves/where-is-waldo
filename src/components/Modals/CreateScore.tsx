import { createContext, useEffect, useRef, useState } from 'react'
import { postScore } from 'utils'
import { useTimer } from 'components/Context/TimerContext'
import React from 'react'
export default function CreateScore({
  showDialog,
  setShowDialog,
  setGameActive
}) {
  const { time } = useTimer()
  const submitForm = async (e) => {
    e.preventDefault()
    const username = e.target.elements.username.value
    postScore(username, time)
    setShowDialog(false)
    setGameActive(true)
  }

  return (
    <div className=" fixed left-1/2  top-1/2 mx-auto flex size-96 -translate-x-1/2 -translate-y-1/2 items-center justify-center ">
      <dialog className=" [input] flex size-full flex-col items-center bg-[#1B1725] p-6 text-2xl text-white">
        <h1 className="text-4xl font-bold">Save Score:</h1>
        <form
          action=""
          onSubmit={submitForm}
          className="my-5 flex size-full flex-col items-center *:p-4"
        >
          <label htmlFor="" className="text-3xl">
            username:
          </label>
          <input
            type="text"
            id="username"
            required
            placeholder="Enter your username"
            className="text-black"
          />
          <button
            id="submitModal"
            className="my-12 rounded-md bg-blue-400 p-6 active:bg-blue-500 "
          >
            Submit
          </button>
        </form>
      </dialog>
    </div>
  )
}
