const Persons = ({ displayedPersons, onDeleteName }) => {
  return displayedPersons.map((person) => (
    <div key={person.id}>
      {person.name} {person.number}
      <button onClick={() => onDeleteName(person.id)}>Delete</button>
    </div>
  ))
}

export default Persons
