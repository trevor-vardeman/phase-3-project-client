import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Stack from 'react-bootstrap/Stack'
import Navbar from './Navbar'

function UpcomingAppointments() {
  const [upcomingAppointments, setUpcomingAppointments] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://localhost:9292/appointments")
      .then(r => r.json())
      .then(data => setUpcomingAppointments(data))
      .catch(err => alert(err.message))
  },[])

  function handleclick(apptId) {
    navigate(`/appointments/${apptId}`)
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <Stack gap={3}>
        <h2 class="center">Upcoming Appointments</h2>
        {upcomingAppointments.map((appt) => (
          <div key={appt.id} class="center" onClick={() => handleclick(appt.id)}>
            <li>
              <img src={appt.dog.photo_url} alt={`${appt.dog.name} the ${appt.dog.breed}`}/>
              <h6><strong>Appointment date/time:</strong> {appt.appt_datetime}</h6>
              <h6><strong>Dog:</strong> {appt.dog.name}</h6>
              <h6><strong>{appt.dog.name}'s Age:</strong> {appt.dog.age}</h6>
              <h6><strong>{appt.dog.name}'s Breed:</strong> {appt.dog.breed}</h6>
              <h6><strong>Groomer:</strong> {appt.groomer.name}</h6>
              <h6><strong>Service:</strong> {appt.service.name}</h6>
              <h6><strong>Length:</strong> {appt.service.service_length} minutes</h6>
              <h6><strong>Cost:</strong> ${appt.service.cost}</h6>
            </li>
          </div>
          ))}
      </Stack>
    </Stack>
  )
}

export default UpcomingAppointments  