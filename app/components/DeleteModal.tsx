"use client";

import React, { useState } from "react";

import Button from "./Button";
import DeleteJobPostingModal from "../Modals/DeleteJobPostingModal";

function DeleteModal() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <Button
        label="Delete"
        styleWrapper="w-16 !py-1 !px-1 text-xs bg-error"
        onClick={() => setIsDeleteModalOpen(true)}
      />

      {isDeleteModalOpen && (
        <DeleteJobPostingModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
    </>
  );
}

export default DeleteModal;
