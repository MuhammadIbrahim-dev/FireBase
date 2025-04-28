import { useState } from "react";
import "./App.css";
import { getCities } from "./Firebase/config";
import { useEffect } from "react";
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getCities();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="items-center align-center flex flex-col border p-10">
        <h1 className="text-4xl font-bold p-10">posts</h1>
        <div className=" sm:w-1/2">
        <ul className="flex flex-col gap-5">
          {posts.map((post) => (
            <li key={post.id} className="bg-[#f18706] flex justify-between p-5 text-left">
              <div className=''>
                <p className="">name: {post.name}</p>
                <p className="">Gmail: {post.gmail}</p>
                <p className="">Password: {post.password}</p>
              </div>
              <div className="gap-2 flex flex-col">
              <button className=" py-1 px-2  bg-red-500 outline-none rounded-full">Delete</button>
              <button className=" py-1 px-2  bg-green-500 outline-none rounded-full">Update</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
