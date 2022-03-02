import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'JNF', label: 'JNF' },
  { value: 'INF', label: 'INF' },
]

function AddJnfInf() {
  function handleClick(e){
    e.preventDefault()
    window.location.pathname='/hrdashboard/allJNF-INF';
  }

  return (
    <>
     <div className="p-4 mt-10 sm:mt-0 text-left ">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-2xl  font-medium leading-6 text-gray-900">Add JNF</h3>
                            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="" >
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                    <div className='m-2'>
                        <label className='p-3' htmlFor="role">Role :</label>
                        <Select options={options} />
                      </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="first-name" className="block text-lg font-medium text-gray-700">Profile</label>
                                            <input type="text"  name="name" id="name" autocomplete="name" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="first-name" className="block text-lg font-medium text-gray-700">Description</label>
                                            <textarea type="text"  name="companyName" id="companyName" autocomplete="name" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>


                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="country" className="block text-lg font-medium text-gray-700">Cut off GPA</label>
                                            <input type="text"  name="email" id="email" autocomplete="email" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="country" className="block text-lg font-medium text-gray-700">Eligible Branch</label>
                                            <input type="text"  name="email" id="email" autocomplete="email" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="country" className="block text-lg font-medium text-gray-700">CTC/Stipend</label>
                                            <textarea type="text" name="about"   id="about" autocomplete="about" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        
                                        <div className="col-span-6 sm:col-span-4">
                                            <label for="email-address" className="block text-lg font-medium text-gray-700">place of posting</label>
                                            <input type="text" name="website"  id="website" autocomplete="email" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                            <label for="email-address" className="block text-lg font-medium text-gray-700">Tenure</label>
                                            <input type="text" name="phnNo" id="phnNo"   autocomplete="email" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label for="email-address" className="block text-lg font-medium text-gray-700">Skills required</label>
                                            <input type="email"   autocomplete="email" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                            <label for="email-address" className="block text-lg font-medium text-gray-700">Type of Test</label>
                                            <input type="email"   autocomplete="email" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                            <label for="email-address" className="block text-lg font-medium text-gray-700">Other Qualification Rounds</label>
                                            <input type="email"   autocomplete="email" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                            <label for="email-address" className="block text-lg font-medium text-gray-700">Final Notes</label>
                                            <input type="email"   autocomplete="email" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                      

                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" onClick={handleClick} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


    
    
    </>
  )
}

export default AddJnfInf