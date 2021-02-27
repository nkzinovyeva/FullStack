import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [search, setSearch] = useState('')
  const [ filteredPersons, setFilteredPersons ] = useState([])

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
    let filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search));
    setFilteredPersons(filteredPersons);
  }

  const addPerson = (event) => {
    event.preventDefault()
    const allPersons = persons.map((person) => person.name)
    if (allPersons.includes(newName)) {
      alert(`${newName} is already added to phonebook`)	
      setNewName('')
      setNewPhone('')
    } else {
      const personObject = {
        name: newName,
        phone: newPhone
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewPhone('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        search for: <input
        value={search}
        onChange={handleSearch}
        /> 
      </div>
      <h4>add a new</h4>
      <form onSubmit={addPerson}>
        <div>
          name: <input
          value={newName}
          onChange={handlePersonChange} 
          />
        </div>
        <div>
          phone: <input
          value={newPhone}
          onChange={handlePhoneChange} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h4>Numbers</h4>
      <ul>
        {filteredPersons && filteredPersons.length > 0 
        ? filteredPersons.map((person, i) => 
        <li key={i}>{person.name}, {person.phone}</li>)
        : persons.map((person, i) => 
          <li key={i}>{person.name}, {person.phone}</li>
        )}
      </ul>
    </div>
  )
}

export default App;
