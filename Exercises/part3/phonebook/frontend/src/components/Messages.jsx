const Message = ({ message }) => {
  if (!message[0]) {
    return null
  }
  return <div className={message[1]}>{message[0]}</div>
}

export default Message
