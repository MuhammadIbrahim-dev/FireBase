import React from 'react'
import { useState, useEffect } from "react";
import { getCities } from '../FireBaseCURD/GetApi'
import { DeleteApi } from '../FireBaseCURD/DeleteApi';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


const ListReciep = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const fetchedPosts = await getCities();
            setPosts(fetchedPosts);
          } catch (error) {
            console.error("Error fetching posts:", error);
          }
        };
        fetchPosts();
      }, []);
    

// deleter Recipe onclick function

const DeleteHandler = async(id)=>{
  console.log(id);
  confirm('What are your Delete this reciep?')
  window.location.reload();
  await DeleteApi(id);
  return DeleteApi(id)




}

  return (
    <div className="items-center align-center flex flex-col border p-10">
        <button className='absolute left-40 py-1 px-4 bg-blue-400 text-white'><Link to={"/"}>Home</Link></button>
        <button className='absolute right-40 py-1 px-4 bg-blue-400 text-white'><Link to={"/CreateReciep"}>back</Link></button>
    <h1 className="text-4xl font-bold p-10">Posts</h1>
    <div className="sm:w-1/2">
      <ul className="flex flex-col gap-5">
        {posts.map((post) => (
             <li key={post.id} className="group ease-in duration-400 bg-[#f18706] flex justify-between p-5 text-left">
           <div className=''>
              <p className="">Name: {post.name}</p>
              <p className=""></p>
              <p className="">details: {post.detail}</p>
              <p className="">limmit: {post.total}</p> 
              <p className="">total: {post.total}</p>
              <p className=''>Date : {post.createAt}</p>
            </div>
            <div className="gap-2 flex flex-col">
              <button className="py-1 px-2 bg-red-500 outline-none rounded-full hidden group-hover:block text-xl " onClick={()=> DeleteHandler(post.id)}><MdDelete /></button>
              <button className="py-1 px-2 bg-green-500 outline-none rounded-full hidden group-hover:block  text-xl"><FaRegPenToSquare /></button>
            </div>
          </li>
         
        ))}
      </ul>
    </div>
  </div>
  )
}

export default ListReciep
