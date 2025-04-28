import React from 'react'
import '../App.css'
const TeamMemberCard = ({data}) => {
  return (
    <div className='main-box'>
      <h2>Name:{data.name}</h2>
      <h2> Job Title:{data.jobtitle}</h2>
    </div>
  )
}

export default TeamMemberCard
