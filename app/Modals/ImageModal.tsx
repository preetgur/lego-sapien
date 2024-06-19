import { ModalPropsInterface } from "@/types/job";
import React from "react";
import Modal from "./Modal";
import Image from "next/image";

interface ImageModalProps extends ModalPropsInterface {
  submitter_photo_url: null | string;
}

function ImageModal({ submitter_photo_url, isOpen, onClose }: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={onClose}
      // title="Candidate image"
      titleClassName="!text-white"
      panelStyle={{
        width: "50%",
        height: "500px",
        overflow: "scroll",
        justifyContent: "flex-start",
        backgroundColor: "#FFFFFF",
        color: "#090E34",
      }}
      childrenStyleWrapper="py-5 !m-0  !justify-center !items-center h-full"
    >
      <div className=" flex h-full w-full flex-col items-center justify-center">
        {submitter_photo_url && (
          <Image
            src={submitter_photo_url}
            alt="interviewee image"
            width={400}
            quality={100}
            height={400}
            className="rounded-md border border-red object-contain"
          />
        )}
      </div>
    </Modal>
  );
}

export default ImageModal;
