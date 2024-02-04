import { Button, TextInput } from "flowbite-react";
import { useState } from "react";


export default function DashProfile() {
  const [imageFile,setimageFile] =useState(null)
  const handleImageChange=(e)=>{
 setimageFile(e.target.file[0])
  }
  return (
    <div className="max-w-lg mx-auto p-4 w-full">
      <center><h1 className="my-7 font-semibold text-3xl">profile</h1></center>
      <form  className="flex flex-col gap-4 ">
        <input type="file"  accept="image/*" onChange={handleImageChange}/>
        <div className="w-32 h-32 self-center cursor-pointer shadow-md rounded-full">
        <img className="w-full h-full rounded-full object-cover border-8 border-[lightgray]" src="https://imgs.search.brave.com/0awgMFfKO4rV5sJox17R6VpVl61QeVar83_o_1coB9I/rs:fit:860:0:0/g:ce/aHR0cDovL3d3dy53/aGF0c2FwcGltYWdl/cy5pbi93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8xMi9EUC5q/cGc" alt="" />
        </div>
       
        <TextInput type="text" placeholder="username" id="username" />
        <TextInput type="Email" placeholder="Email" id="email" />
        <TextInput type="password" placeholder="Password" id="password" />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>update</Button>
      </form>
      <div className="flex justify-between text-red-400 mt-5">
        <span className="cursor-pointer">DeleteAcount</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  )
}
