import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function EmployeeDetails() {
  const data = useSelector((state) => state.employee.data)
  const navigate = useNavigate()
  const fullName = `${data.first_name} ${data.last_name}`
  const formattedDate = new Date(data.doj).toLocaleDateString('en-GB')
  const formattedDob = new Date(data.dob).toLocaleDateString('en-GB')

  return (
    <div className="cardContainer">
      <div className="card">
        <div>FullName: {fullName}</div>
        <div>Date of Birth: {formattedDob}</div>
        <div className="capitalize">Gender: {data.gender}</div>
        <div className="capitalize">Selected Interest: {data.interests}</div>
        <div className="capitalize">State: {data.state}</div>
        <div className="capitalize">Skills: {data.skill} </div>
        <div>Date of Joining: {formattedDate}</div>
        <div className="backBtn">
          <button onClick={() => navigate('/')}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetails
