
import React ,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'
import Select from 'react-select'

const options = [
  { value: 'STUDENT', label: 'Student' },
  { value: 'HR', label: 'Hr' },
  { value: 'COORDINATOR', label: 'Coordinator' },
  { value: 'ADMIN', label: 'Admin' },
]




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
        <div className=' flex w-full h-full   '>
          <div className='hidden sm:flex w-2/5 text-center h-[100vh] relative  flex-col content-center justify-center before:w-full  before:absolute before:bg-no-repeat before:-z-10 before:opacity-25 before:bg-cover before:content-[""] before:h-[100vh] before:bg-[url("https://images.unsplash.com/photo-1519335664-9434143e2067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80")]'> 
          <div className='w-36 h-36  ml-[50%] translate-x-[-50%]'>
            <img src="https://upload.wikimedia.org/wikipedia/en/b/b0/Indian_Institute_of_Technology_%28Indian_School_of_Mines%29%2C_Dhanbad_Logo.png" alt="iitism" />
          </div>
              <div>
                  <h1 className='text-3xl m-3'>CDC Portal IITISM</h1>
              </div>
              <div className='m-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </div>
              <div>

              </div>
          </div>
          <div className='w-full sm:w-3/5  h-[100vh] '>
                <div className='flex flex-col justify-center content-start  h-[100vh] '>
                  <div className='m-auto'>
                    <h1 className='text-3xl m-3'>SIGN IN</h1>
                    <form className='flex flex-col content-center  ' action="">
                      <div className='m-2'>
                        <label className='p-3' htmlFor="role">Role :</label>
                        <Select options={options} />
                      </div>
                      <div className='m-2'>
                        <label className='p-3' htmlFor="username">Username :</label>
                        <input className='m-auto p-3 outline-none border-b-2 border-gray-300 focus:border-black' type="text" name="username" id="username" placeholder='User Name' />
                      </div>
                      <div className='m-2'>
                        <label className='p-3' htmlFor="password">Password :</label>
                        <input className='m-auto p-3 outline-none  border-b-2 border-gray-300 focus:border-black' type="password" id='password' placeholder='Password' />
                      </div>
                      <button className='px-2 py-1  bg-black text-white w-24 rounded-md mt-4  self-center' type="submit">LOG IN</button>
                    </form>
                  </div>
                </div>
          </div>
        </div>
        </>
    )
}