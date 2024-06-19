import { CustomModalPropsInterface } from "@/types/job";
import Modal from "./Modal";
import Button from "../components/Button";

function ExitFullScreenModal({
  isOpen,
  onClose,
  handler,
}: CustomModalPropsInterface) {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={onClose}
      title="FullScreen Mode Exit!"
      titleClassName="!text-white"
      panelStyle={{
        width: "66%",
        height: "300px",
        overflow: "scroll",
        justifyContent: "flex-start",
        backgroundColor: "#FB607F",
        color: "#090E34",
      }}
      childrenStyleWrapper="py-5 !m-0  !justify-between"
    >
      <div className=" flex flex-col items-center justify-center ">
        <p className="mb-2">
          As you leave the FullScreen mode, this is going to affect your
          interview performance.
        </p>
        <div className="mt-2 flex w-full items-center justify-between">
          <div>
            <Button
              onClick={onClose}
              styleWrapper="mt-3 bg-secondary h-10 "
              label="cancel"
            />
          </div>

          <div>
            <Button
              onClick={handler}
              styleWrapper="mt-3 h-10 bg-white text-secondary"
              label="Back To FullScreen Mode"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ExitFullScreenModal;
