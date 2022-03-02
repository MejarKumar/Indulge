
import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { connect } from 'react-redux';
import { userActions } from '../actions';
const options = [
  { value: 'STUDENT', label: 'Student' },
  { value: 'HR', label: 'Hr' },
  { value: 'COORDINATOR', label: 'Coordinator' },
  { value: 'ADMIN', label: 'Admin' },
]

function Login(props){

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [role,setRole]=useState(options[0].value)

    const navigate = useNavigate()

    const handleUsername=(e)=>{
      setUsername(e.target.value)
    } 
    const handlePassword=(e)=>{
      setPassword(e.target.value)
    } 
    const handleRole=(e)=>{
      console.log(e)
      setRole(e)
    } 


     function handleSubmit(e) {
      e.preventDefault()
      const username=e.target[1].value
      const   password =e.target[2].value
      const rl = !!role ? role.value : "STUDENT"
      
      if (username && password && rl) {
        
          props.login(username, password,rl)
          
      }
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
                    <form className='flex flex-col content-center  ' action="" onSubmit={handleSubmit}>
                      <div className='m-2'>
                        <label className='p-3' htmlFor="role">Role :</label>
                        <Select options={options} value={role} onChange={handleRole} />
                      </div>
                      <div className='m-2'>
                        <label className='p-3' htmlFor="username">Username :</label>
                        <input value={username} onChange={handleUsername} className='m-auto p-3 outline-none border-b-2 border-gray-300 focus:border-black' type="text" name="username" id="username" placeholder='User Name' />
                      </div>
                      <div className='m-2'>
                        <label className='p-3' htmlFor="password">Password :</label>
                        <input value={password} onChange={handlePassword} className='m-auto p-3 outline-none  border-b-2 border-gray-300 focus:border-black' type="password" id='password' placeholder='Password' />
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

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

export default connect(mapState, userActions)(Login)
