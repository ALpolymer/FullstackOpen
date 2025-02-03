const Persons = ({ displayedPersons }) => {
  return displayedPersons.map((person) => (
    <div key={person.id}>
      {person.name} {person.number}
    </div>
  ))
}

export default Persons
