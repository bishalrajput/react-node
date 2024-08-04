import React, { useState } from 'react'

const RegForm = () => {
  const [form , setForm] = useState({
    name: "",
    email: "",
    password:"",
  });
  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(form); {}

  }
  return (
 <div className='grid place-items-center h-[100vh]'>
    <div className="w-[80%] h-[90%] grid place-items-center shadow-black shadow-xl">
    <form action={handleSubmit} className=' w-[80%] flex flex-col justify-center items-center'>
    <h1 className='text-3xl font-bold text-center text-blue-500'>Register </h1>
    <input className='w-full p-2 border-b-2 border-black' type="text" name="name" id="" placeholder='Enter name' onChange={(e)=>setForm({ ...form,name:e.target.value})} value={form.name}/>
    <input className='w-full p-2 border-b-2 border-black' type="text" name="email" id="" placeholder='Enter email' onChange={(e)=>setForm({ ...form,email:e.target.value})} value={form.email}/>
    <input className='w-full p-2 border-b-2 border-black' type="text" name="password" id="" placeholder='Enter password' onChange={(e)=>setForm({ ...form,password:e.target.value})} value={form.password}/>
    <button type='submit'className='p-2 p-4 bg-green-500 rounded-md'>submit</button>
    
    </form>
    </div>
        
        </div>
  )
};

export default RegForm