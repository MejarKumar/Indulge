import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
function Protected() {

    const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  

  useEffect(() => {
    

    if (!user) {
      navigate('/login')
    }

    

  }, [user])


  return (
    <div>
        hello protected page
    </div>
  )
}

export default Protected