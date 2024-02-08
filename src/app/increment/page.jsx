"use client";

import { useState, useEffect} from "react";

export default function IncrementPage() {

        const[count, setCount] = useState(0);

        function increaseValue(){
            setCount(count + 1);
        }
        function resetValue(){
            setCount(0);
        }
        useEffect(()=> {
                
        } , []);

  return (
    <div className="flex w-full min-h-screen justify-center items-center flex-col gap-4">
        <h1 className="font-semibold text-blue-500">
          Counter Increment App
          </h1>

        <p className="text-xl font-bold text-blue-800">
          {count}
          </p>
        
        <button onClick={increaseValue} className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-300">
          Increment
          </button>
        
        <button onClick={resetValue} className= "bg-red-500 text-white  px-5 py-2 rounded-full hover:bg-red-300">
          Reset
          </button>
    </div>
  )
}
