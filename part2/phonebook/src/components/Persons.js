import React from 'react'

const Persons = (props) => {
    const persons = props.persons;
    const filteredPersons = props.filteredPersons;

  return (
    <ul>
        {filteredPersons && filteredPersons.length > 0 
        ? filteredPersons.map((person, i) => 
        <li key={i}>{person.name}, {person.phone}</li>)
        : persons.map((person, i) => 
          <li key={i}>{person.name}, {person.phone}</li>
        )}
    </ul>
  )
}

export default Persons 