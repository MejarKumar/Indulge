
import React ,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'
export default function Login(){

    const [formData, setFormData] = useState({
        admNo: '',
        password: '',
      })
      const { admNo, password } = formData
      const navigate = useNavigate()
      const dispatch = useDispatch()

      const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )
        
      useEffect(() => {
        if (isError) {
        }
    
        if (isSuccess || user) {
          navigate('/home')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])

      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

      const onSubmit=(e)=>{
        e.preventDefault()
        const userData = {
            admNo,
            password,
        }
        dispatch(login(userData))
    }
    return (
        <>
        <div className='flex'>
            <div className='bg-black h-screen hidden lg:flex md:w-1/2'>    
            </div>
                <div className='flex flex-col w-screen lg:w-1/2 '>
                    <div className='w-[100%] h-20 bg-black'></div>
                    <h1 className='text-3xl mb-16 mt-8'>Sign In</h1>
                    <form onSubmit={onSubmit}  className=' flex flex-col  items-center justify-center' action="">
                        <input className='border-[1px] rounded focus:outline-none p-2 border-black m-4 w-1/2 ' onChange={onChange} value={admNo} placeholder='Addmission Number' type="text" name="admNo" id="admNo" />
                        <input className='border-[1px] rounded focus:outline-none p-2 border-black m-4 w-1/2 ' onChange={onChange} value={password} placeholder='Password' type="password" name="password" id="password" />
                        <button className='bg-black text-white p-3 px-6 mt-3 rounded-lg'>Log In</button>
                    </form>
                </div>
        </div>
        </>
    )
}