import React from 'react'
import { Link } from 'react-router-dom'

export default function Leave() {
  return (
    <div>
      <div className="flex flex-col py-12">
      <Link to="/" className="underline hover:bg-cyan-500">Go Home</Link>
      <Link to="departments" className="underline hover:bg-cyan-500">Department</Link>
      <Link to="Employees" className="underline hover:bg-cyan-500">Employees</Link>
      <Link to="leave" className="underline hover:bg-cyan-500">Leave</Link>
      <Link to="evaluation-analysis" className="underline hover:bg-cyan-500">Evaluation</Link>
      </div>
    </div>
  )
}
