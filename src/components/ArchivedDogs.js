import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import DogNav from './DogNav'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

function ArchivedDogs() {
  const [archivedDogs, setArchivedDogs] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/archived-dogs")
      .then(r => r.json())
      .then(data => setArchivedDogs(data))
      .catch(err => alert(err.message))
  },[])

  function handleUnarchive(id) {
    
  }

  return (
    <Stack gap={3}>
      <Navbar />
      <DogNav />
      <Stack gap={3}>
        <h2>Archived Dogs</h2>
        {archivedDogs.map((dog) => (
          <div key={dog.id}>
            <Button onClick={() => handleUnarchive(dog.id)} size="sm" variant="danger">Unarchive Dog</Button>
            <h6><strong>{dog.name}</strong></h6>
            <h6>Breed: {dog.breed}</h6>
            <h6>Age: {dog.age}</h6>
            <img style={{maxWidth: "200px", maxHeight: "200px"}} src={dog.photo_url} alt={`${dog.name} the ${dog.breed}`}/>
          </div>
        ))}
      </Stack>
    </Stack>
  )
}

export default ArchivedDogs