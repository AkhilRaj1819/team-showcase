import { useState } from 'react'
import './App.css'
import TeamMemberCard from './components/TeamMemberCard'
import data from '../data.json'
function App() {

  return (
    <>
    <div>
      <h1>Team members</h1>
      <div className='cards'>
      {
        data.map((member)=>(
          <TeamMemberCard
          key={member.id}
          data={member}
          />
        ))
      }
      </div>
    </div>
    </>
  )
}

export default App
