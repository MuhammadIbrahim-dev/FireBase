import React, { useState } from 'react';
import { CreateApi } from '../FireBaseCURD/CreateApi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bacground from '../assets/Fronted/bacground.mp4';
const Create = () => {
  const navigate = useNavigate();
    const [name,setName]=useState('');
    const [detail,setDetail]=useState('');
    const [total,setTotal]=useState('');

  const Onclickhandler = (id) =>{  
        console.log(name);
    console.log(detail);
    console.log(total);
    if(id) {
      CreateApi(newpost);
    }
       CreateApi(newpost)
       navigate('/listReciep');
       return;
  }  
  let newpost = {
    name:name,
    detail: detail,
    total: total,
    createAt: new Date().toISOString(),
  }
  
  return (
    <div className='  relative h-screen w-screen overflow-hidden flex justify-center items-center'>
       <video src={bacground}  autoPlay
              loop
              muted
              playsInline className='object-cover  w-full  bg-cover flex h-full absolute z-[-1]' type="video/mp4"></video>
              <button className='absolute left-10 top-8 py-1 px-4 bg-blue-400 text-white'><Link to={"/"}>Home</Link></button>
              <button className='absolute right-10 top-8 py-1 px-4 bg-blue-400 text-white'><Link to={"/listReciep"}>List Recieps</Link></button>
    <div className='flex flex-col gap-5 bg-[#34d5eb] rounded-lg w-1/2 p-10'>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className='py-1 px-2 outline-none bg-transparent border border-transparent border-b-[2px] border-b-[#000]' placeholder='Enter Reciep name'/>
      <input type="text" value={detail} onChange={(e)=> setDetail(e.target.value)} className='py-1 px-2 outline-none bg-transparent border border-transparent border-b-[2px] border-b-[#000]' placeholder='Enter Details'/>
      <input type="text" value={total} onChange={(e)=> setTotal(e.target.value)} className='py-1 px-2 outline-none bg-transparent border border-transparent border-b-[2px] border-b-[#000]' placeholder='Enter totat'/>
      <button className='bg-blue-400 py-4 rounded-lg' onClick={Onclickhandler}>submit</button>
</div>
    </div>
  )
}

export default Create
