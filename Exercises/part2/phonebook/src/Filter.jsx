const Filter = ({ onFilterChange }) => {
  return (
    <div>
      filtershown with:
      <input placeholder="search phonebook" onChange={onFilterChange} />
    </div>
  )
}

export default Filter
