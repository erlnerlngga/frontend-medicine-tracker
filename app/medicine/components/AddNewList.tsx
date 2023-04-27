"use client";

import { IoClose } from "react-icons/io5";
import { FC, FormEvent, ReactElement, useRef } from "react";
import { data } from "autoprefixer";

interface PropType {
  closeButton: () => void;
  data?: { name: string; dosage: number; frequency: number };
  isUpdate: boolean;
}

const AddNewList: FC<PropType> = ({
  closeButton,
  isUpdate,
  data,
}): ReactElement => {
  const nameRef = useRef<HTMLInputElement>(null);
  const dosageRef = useRef<HTMLInputElement>(null);
  const frequencyRef = useRef<HTMLInputElement>(null);

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      nameRef.current !== null &&
      dosageRef.current !== null &&
      frequencyRef.current !== null
    ) {
      console.log(nameRef.current.value);
      console.log(dosageRef.current.value);
      console.log(frequencyRef.current.value);
    }
  };

  return (
    <>
      <div
        onClick={closeButton}
        className="fixed top-0 right-0 left-0 bottom-0 w-full z-50 bg-gray-900 bg-opacity-50 grid place-content-center"
      ></div>

      <div className="max-w-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full">
        <div className="bg-white rounded-md shadow p-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl text-gray-700 font-bold">Add New List</h1>
            <IoClose onClick={closeButton} className="h-6 w-6 cursor-pointer" />
          </div>

          <hr className="border-1 border-gray-600 mb-12" />

          <form onSubmit={handleSumbit}>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="name" className="text-gray-500">
                Medicine Name
              </label>
              <input
                defaultValue={isUpdate ? data?.name : ""}
                ref={nameRef}
                type="text"
                id="name"
                name="name"
                className="outline-none px-4 py-1.5 text-gray-700 rounded-md  border-2 border-red-200"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="dosage" className="text-gray-500">
                Dosage
              </label>
              <input
                defaultValue={isUpdate ? data?.dosage : ""}
                ref={dosageRef}
                type="number"
                id="dosage"
                name="dosage"
                min={1}
                className="outline-none px-4 py-1.5 text-gray-700 rounded-md  border-2 border-red-200"
              />
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label htmlFor="frequency" className="text-gray-500">
                Frequency
              </label>
              <input
                defaultValue={isUpdate ? data?.frequency : ""}
                ref={frequencyRef}
                type="number"
                id="frequency"
                name="frequency"
                min={1}
                className="outline-none px-4 py-1.5 text-gray-700 rounded-md  border-2 border-red-200"
              />
            </div>

            <button
              type="submit"
              className="py-1.5 px-4 rounded-md bg-red-500 text-white w-full font-semibold tracking-widest"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewList;
