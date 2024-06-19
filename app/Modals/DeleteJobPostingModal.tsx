import React, { FormEvent } from "react";
import { useParams } from "next/navigation";

import Modal from "./Modal";

import { ModalPropsInterface } from "@/types/job";

import { useUI } from "../contextApi/UIContext";
import { notify } from "../helpers/NotificationHelper";
import { deleteJobPostingById } from "../serverActions/job";

function DeleteJobPostingModal({ isOpen, onClose }: ModalPropsInterface) {
  const { id } = useParams();
  const { startLoading, stopLoading } = useUI();

  const onSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      startLoading();
      await deleteJobPostingById(+id); // calling server action
      notify({ type: "success", message: "Job Deleted" });
    } catch (error: any) {
      notify({
        type: "error",
        message: "Something went wrong while deleting Job Posting",
      });
    } finally {
      stopLoading();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={onClose}
      title="Delete Job Posting"
      panelStyle={{
        width: "50%",
      }}
    >
      <div className="flex w-full items-center justify-center">
        <form onSubmit={onSubmit} className="w-full">
          <div className="my-2 flex flex-col  px-20  ">
            <p className="text-center text-black">
              Are you sure you want to delete this Job Posting ?
            </p>
          </div>

          <div className="mx-auto my-10 flex w-full items-center  justify-center space-x-10 md:w-40">
            <button
              onClick={() => onClose()}
              type="button"
              className={`flex h-10 w-full items-center justify-center rounded-md bg-error py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80
              hover:shadow-signUp`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`flex h-10 w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp `}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default DeleteJobPostingModal;
