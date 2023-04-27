"use client";

import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import AddNewList from "./AddNewList";

export default function AddButton() {
  const [open, setOpen] = useState<boolean>(false);

  const closeButton = () => {
    setOpen(false);
  };

  return (
    <>
      <FaPlus
        onClick={() => setOpen(true)}
        className="fixed bottom-12 right-12 p-4 rounded-full bg-red-500 text-white h-14 w-14 shadow cursor-pointer"
      />
      {open && <AddNewList closeButton={closeButton} isUpdate={false} />}
    </>
  );
}
