"use client";

import { useState } from "react";

export default function FormPage() {
  const [firstNum, setFirstNum] = useState("");
  const [lastNum, setLastNum] = useState("");

  const calculate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fNum = formData.get("firstNum");
    const lNum = formData.get("lastNum");
    setFirstNum(fNum);
    setLastNum(lNum);
  };

  return (
    <form
      onSubmit={calculate}
      className="flex w-full min-h-screen justify-center items-center flex-col gap-3"
    >
      <h1 className="text-xl font-semibold text-red-500">Additon Form</h1>

      <div className="flex flex-col gap-3 ">
        <input
          type="number"
          name="firstNum"
          className="px-6 py-3 border-2 rounded border-black focus:outline-none focus:border-blue-500"
          placeholder="Enter number"
        />


        <input
          type="number"
          name="lastNum"
          className="px-6 py-3 border-2 rounded border-black focus:outline-none focus:border-blue-500"
          placeholder="Enter number"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-400"
        >
          Calculate
        </button>
      </div>
      <p className="text-xl font-bold text-blue-500">
        Addition is:  {firstNum + lastNum}
      </p>

      <h1 className="text-xl font-semibold text-red-500">Subtraction Form</h1>

      <div className="flex flex-col gap-3 ">
        <input
          type="number"
          name="firstName"
          className="px-6 py-3 border-2 rounded border-black focus:outline-none focus:border-blue-500"
          placeholder="Enter your first name"
        />


        <input
          type="number"
          name="lastName"
          className="px-6 py-3 border-2 rounded border-black focus:outline-none focus:border-blue-500"
          placeholder="Enter your last name"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-400"
        >
          Submit
        </button>
      </div>
      <p className="text-xl font-bold text-blue-500">
        Subtraction is:  {firstNum + lastNum}
      </p>
    </form>
  );
}