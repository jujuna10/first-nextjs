'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [input,setInput] = useState("")
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/prediction/${input}`)

  }

  return (
    <div className="bg-[rgb(229,212,212)] flex gap-[20px] justify-center items-center h-screen flex-col">
      <div className="flex flex-col p-[35px] rounded-[20px] bg-white gap-[20px] justify-center items-center">
        <h1 className="text-[29px] font-bold">Enter Your Name</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input type="text" placeholder="Type your name" onChange={(e) => setInput(e.target.value)} value={input} className="border-[1px] border-gray-400 p-[10px] rounded-[20px]"></input>
          <button type="submit" className="w-full bg-blue-700 mt-[20px] rounded-[20px] p-[10px] text-white">Predict Data</button>
        </form>
      </div>

    </div>
  )
}
