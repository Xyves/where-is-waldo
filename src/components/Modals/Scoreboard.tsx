import { useEffect, useState } from 'react'
import { fetchScores } from 'utils'

export default function Scoreboard() {
  const [scores, setScores] = useState([])
  useEffect(() => {
    const loadScoreboard = async () => {
      try {
        const response = await fetchScores()
        await setScores(response.results.map((score) => ({ ...score })))
      } catch (err: any) {
        console.error(err)
      }
    }
    loadScoreboard()
  }, [])
  return (
    <div className="flex size-full  justify-center bg-[#0b0d22] py-6">
      <table className="flex w-80 border-collapse flex-col justify-center text-2xl text-white">
        <thead>
          <tr className="  bg-[#1e293b] *:p-3 ">
            <th className=" w-1/5 "> Place</th>
            <th>Player</th>
            <th className="w-1/2">Time</th>
          </tr>
        </thead>
        <tbody className="">
          {scores?.map((score, index) => (
            <ScoreRow score={score} key={score.id} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
const ScoreRow = ({ score, index }) => {
  const { username, time } = score
  const formattedTime = `${Math.floor(time / 60000)}m ${Math.floor((time % 60000) / 1000)}s ${time % 1000 ? Math.floor((time % 1000) / 10) + 'ms' : ''}`
  return (
    <tr className="bg-[#0f172a] *:px-5 *:py-2 [&>*]:text-center [&>td]:text-base">
      <td className="w-1/5">{index}</td>
      <td>{username}</td>
      <td className=" w-1/2">{formattedTime}</td>
    </tr>
  )
}
