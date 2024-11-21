import React from 'react'

export default function CharacterList({ characters }) {
  return (
    <div className="fixed right-0 top-0 mr-6 mt-6 flex *:rounded-lg ">
      <li className="mx-3 size-24 bg-red-300"></li>
      <li className="mx-3 size-24 bg-blue-300"></li>
      <li className="mx-3 size-24 bg-yellow-300"></li>
    </div>
  )
}
