import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
  
  const [infoApi, setInfoApi] = useState()
  const [hasError, sethasError] = useState(false)
 
  
  const getApi = () =>{
  axios.get(url)
  .then(res => {
    setInfoApi(res.data)
    sethasError(false)
})
  .catch(err => {
    console.log(err)
    sethasError(true)
  })
 }    
  return [infoApi, getApi, hasError,]
}

export default useFetch