import React, { FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";

import Modal from "./Modal";

import { ModalPropsInterface } from "@/types/job";

import { useUI } from "../contextApi/UIContext";
import { notify } from "../helpers/NotificationHelper";
import { updateCandidate } from "../serverActions/job";

function DeleteCandidateModal({ isOpen, onClose }: ModalPropsInterface) {
  const { id, cid } = useParams();
  const { back, push } = useRouter();
  const { startLoading, stopLoading } = useUI();

  const onSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      startLoading();
      const reqBody = {
        is_deleted: true,
        id: +cid,
      };

      await updateCandidate({
        ...reqBody,
        jobId: +id,
      });
      notify({
        type: "success",
        message: `candidate deleted successfully`,
      });

      push(`/dashboard-refactor/job/${id}`);
      // back();
    } catch (error: any) {
      notify({
        type: "error",
        message: "Something went wrong while deleting this candidate",
      });
    } finally {
      stopLoading();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={onClose}
      title="Delete Candidate"
      panelStyle={{
        width: "50%",
        // boxShadow: "0 0 10px lightgray",
      }}
    >
      <div className="flex w-full items-center justify-center">
        <form onSubmit={onSubmit} className="w-full">
          <div className="my-2 flex flex-col  px-20  ">
            <p className="text-center font-medium text-black">
              Are you sure you want to DELETE this candidate?
            </p>
          </div>

          <div className="mx-auto my-6 flex w-full items-center  justify-center space-x-10 md:w-40">
            <button
              onClick={() => onClose()}
              className={`opacity-50" } flex w-full items-center justify-center rounded-md bg-error py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80
              hover:shadow-signUp`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp `}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default DeleteCandidateModal;
