const PersonForm = ({
  onAddName,
  newName,
  onNameChange,
  newNumber,
  onNumberChange,
}) => {
  return (
    <form onSubmit={onAddName}>
      <div>
        name:
        <input
          type="text"
          placeholder="type your name"
          value={newName}
          onChange={onNameChange}
          required
        />
      </div>
      <div>
        number:{" "}
        <input
          type="tel"
          pattern="[0-9]{2}-[0-9]{2}-[0-9]{6}"
          placeholder="XX-XX-XXXXXX"
          value={newNumber}
          onChange={onNumberChange}
          required
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
