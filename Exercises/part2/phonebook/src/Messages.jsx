const SuccessMessage = ({ message }) => {
  console.log(message)
  if (!message[0]) {
    console.log(message[0])
    return null
  }
  return <div className="success">{message}</div>
}

const ErrorMessage = ({ message }) => {
  console.log(message)
  if (!message[1]) {
    console.log(message[1])
    return null
  }
  return <div>{message}</div>
}

export { ErrorMessage, SuccessMessage }
