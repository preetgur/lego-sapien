import { CustomModalPropsInterface } from "@/types/job";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

function PageLeavingModal({
  isOpen,
  onClose,
  customMessage,
}: CustomModalPropsInterface) {
  const router = useRouter();
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={
        customMessage
          ? () => {
              onClose();
              router.push("/");
            }
          : onClose
      }
      title="Alert"
      panelStyle={{
        backgroundColor: "#FB607F",
      }}
    >
      <div className="flex flex-col items-center justify-center ">
        {customMessage ? (
          <p className="-mt-5 text-xl">
            As you leave the page now your Interview is Finished
          </p>
        ) : (
          <>
            <p className="mb-2">
              if you leave the page then your response will be automatically
              submit.
            </p>
            <p>Are you sure to leave interview Process ?</p>
          </>
        )}
      </div>
    </Modal>
  );
}

export default PageLeavingModal;
