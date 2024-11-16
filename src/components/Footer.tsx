import React from 'react'
import 'primeicons/primeicons.css'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 m-8 flex w-52 items-center justify-center bg-[#1B1725] px-10 py-8 text-white">
      <button className="inline-block  ">
        <i
          className="pi pi-github block pr-2 text-2xl
"
        ></i>
        <span className=" text-md inline-block font-footer uppercase">
          Github
        </span>
      </button>
    </footer>
  )
}
