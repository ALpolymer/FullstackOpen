import axios from "axios"
const baseURL = "http://localhost:3001/persons"

const getAllPhones = () => {
  const request = axios.get(baseURL)

  return request.then((response) => response.data)
}

const addNewPhone = (newPhone) => {
  const request = axios.post(baseURL, newPhone)
  return request.then((response) => response.data)
}

const deletePhone = (id) => {
  const request = axios.delete(`${baseURL}/${id}`)
  return request
}
export default {
  getAllPhones,
  addNewPhone,
  deletePhone,
}
