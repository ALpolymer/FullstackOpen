const SearchInput = ({ searchInput, onInputChange }) => {
  return (
    <>
      <span> find countries:</span>
      <input type="text" value={searchInput} onChange={onInputChange} />
    </>
  )
}

export default SearchInput
