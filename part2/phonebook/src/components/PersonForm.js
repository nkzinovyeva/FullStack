import React from 'react'

const PersonForm = (props) => {
    return (
        <form onSubmit={props.addPerson}>
        <div>
          name: <input
          value={props.newName}
          onChange={props.handlePersonChange} 
          />
        </div>
        <div>
          phone: <input
          value={props.newPhone}
          onChange={props.handlePhoneChange} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm;