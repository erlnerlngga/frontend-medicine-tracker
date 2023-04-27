"use client";

import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { FC, ReactElement, useState } from "react";
import AddNewList from "./AddNewList";

interface propType {
  data?: { name: string; dosage: number; frequency: number };
}

const EditAndDelete: FC<propType> = ({ data }): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const closeButton = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <FaEdit onClick={() => setOpen(true)} className="cursor-pointer" />
        <FaTrashAlt className="cursor-pointer text-red-600" />
      </div>

      {open && (
        <AddNewList closeButton={closeButton} isUpdate={true} data={data} />
      )}
    </>
  );
};

export default EditAndDelete;
