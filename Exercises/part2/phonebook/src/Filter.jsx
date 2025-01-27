const Filter = ({ onFilter }) => {
  return (
    <div>
      filtershown with:
      <input placeholder="search phonebook" onChange={onFilter} />
    </div>
  )
}

export default Filter
