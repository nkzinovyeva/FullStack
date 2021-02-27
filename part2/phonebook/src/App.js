import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    
    event.preventDefault()
    
    const allPersons = persons.map((person) => person.name)
    if (allPersons.includes(newName)) {
      alert(`${newName} is already added to phonebook`)	
      setNewName('')
    } else {
      const personObject = {
        name: newName,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handlePersonChange} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => 
          <li key={i}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App;
