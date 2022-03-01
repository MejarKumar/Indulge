import React from 'react'

function UpdateCompanyDetails() {
  return (
    <>
        <div className="p-4 mt-10 sm:mt-0 text-left ">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-2xl  font-medium leading-6 text-gray-900">Company Information</h3>
                            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="first-name" className="block text-lg font-medium text-gray-700">Name</label>
                                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>


                                       

                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="country" className="block text-lg font-medium text-gray-700">Category</label>
                                            <input type="text" name="email-address" id="email-address" autocomplete="email" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        
                                        <div className="col-span-6 sm:col-span-3">
                                            <label for="country" className="block text-lg font-medium text-gray-700">About Company</label>
                                            <textarea type="text" name="email-address" id="email-address" autocomplete="email" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        
                                        <div className="col-span-6 sm:col-span-4">
                                            <label for="email-address" className="block text-lg font-medium text-gray-700">Website</label>
                                            <input type="text" name="email-address" id="email-address" autocomplete="email" className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


    </>
  )
}

export default UpdateCompanyDetails