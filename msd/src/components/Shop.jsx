import React from 'react'

const Shop = () => {
  return (
    <>
    <center>
      <h1  className="text-3xl font-bold underline" style={{marginTop:"20px"}}>shop here</h1>
      </center>

     <center>
      <div className="container" style={{height:"850px",width:"1000px",border:"3px solid black",backgroundColor:"#F4E9F3",fontSize:"30px",color:"white",marginLeft:"10px",marginRight:"10px",marginTop:"30px",borderRadius:"5px"}}>

      
      
     

    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base/7 font-semibold text-gray-900" style={{color:"black",fontSize:"25px"}}>Personal Information</h2>
     

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900" style={{color:"black",fontSize:"25px"}}>First name</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" style={{border:"2px solid #363A57"}}/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900" style={{color:"black",fontSize:"25px"}}>Last name</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" style={{border:"2px solid #363A57"}}/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900" style={{color:"black",fontSize:"25px"}}>Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" style={{border:"2px solid #363A57"}}/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900" style={{color:"black",fontSize:"25px"}}>Country</label>
          <div className="mt-2 grid grid-cols-1">
            <select id="country" name="country" autoComplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" style={{border:"2px solid #363A57"}}>
              <option>India</option>
              <option>Canada</option>
              <option>Mexico</option>
              <option>United states</option>
              <option>China</option>
            </select>
            <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900" style={{color:"black",fontSize:"25px"}}>Street address</label>
          <div className="mt-2">
            <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" style={{border:"2px solid #363A57"}}/>
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900" style={{color:"black",fontSize:"25px"}}>City</label>
          <div className="mt-2">
            <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" style={{border:"2px solid #363A57"}}/>
          </div>
        </div><br></br>

        <div className="sm:col-span-2">
          <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900" style={{color:"black",fontSize:"25px"}}>State / Province</label>
          <div className="mt-2">
            <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" style={{border:"2px solid #363A57"}}/>
          </div>
        </div><br></br><br></br>

        <div className="sm:col-span-2">
          <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900" style={{color:"black",fontSize:"25px"}}>ZIP /Pin code</label>
          <div className="mt-2">
            <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" style={{border:"2px solid #363A57"}}/>
          </div>
        </div>
        
      </div>
    </div>
    <button className='btn btn-warning' style={{height:"50px",width:"150px"}}>Submit-details</button>
    </div>
    </center>
    </>
  )
}

export default Shop
