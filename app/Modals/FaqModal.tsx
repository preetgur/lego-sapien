import React from "react";

import Modal from "./Modal";

import { ModalPropsInterface } from "@/types/job";
import FaqCard from "../components/FaqCard";

const DOES_NOT_POINTS = [
  "a). Recommended to use browsers Chrome and Edge for a good user experience.",
  `b). If at any point in time-there is a session hang or unresponsiveness-just try below:`,
  `   Refresh icon on the question to the right can be used.If it does not resolve-close the browser.Again open the interview link in a new browser and restart the interview`,
  `c). In general at any point in time-the questions can be viewed through the icons provided on the right side(using speech to text),refresh or play button`,
  `d). The background while giving interview needs to be maintained as much as plain with good source of light and candidate should be visible during the entirety of the interview.`,
  `e). Internet speed should be overall good to avoid slowness and glitches`,
  `f). If the camera shutter is closed /no camera images are seen-then it shall be regarded as an identity manipulation`,
  `g). Use the support details provided in the welcome email for any queries that you may have`,
  "h). Never try to reload the whole page.",
];

const MICROPHONE_POINTS = [
  'a). Check if browser setting"Allow microphone" is enabled at the start of the interview.',
  'b). If problem still persists post enabling microphone setting-kindly go to the browser settings- search for "mic" in the textbox and ensure that mic is allowed or enabled for the site in use .If not,then enable it and reopen the browser.Reload the interview.',
  `c). As a workaround-you may choose to answer the question by typing your responses and clicking on 'Submit.'`,
];

const CAMERA_POINTS = [
  'a). Check if browser setting "Allow webcam or camera" is enabled at the start of the interview.',
  'b). If problem still persists post enabling microphone setting-kindly go to the browser settings search for "camera" in the textbox and ensure that camera is allowed or enabled for the site in use .If not,then enable it and reopen the browser.Reload the interview.',
];

const SUBMIT_POINTS = [
  'a). If you are saying "Submit" or "Submit answer" and it is not yet submitting then click on  Submit button manually.',
  'b). After every submit-you will get a response that "Your answer submitted" which should be a verification that its submitted.',
  "c). If problem persists-try to refresh the question through refresh icon and again submitting answer.",
];

const VIRTUAL_POINTS = [
  "a). Check by doing a refresh on the question and see if the sound returns.If this does not work,try step b",
  "b). Playback the same question and provide answer using mic and saying Submit answer.",
  "c). If problem persists-use voice to text conversion icon,read the question and answer through typing on the screen and send submit.",
];

function FaqModal({ isOpen, onClose }: ModalPropsInterface) {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={onClose}
      panelStyle={{
        width: "85%",
        height: "90%",
        overflow: "scroll",
        justifyContent: "flex-start",
      }}
    >
      <div className="flex w-full flex-col items-center justify-center space-y-2 py-20">
        <div className=" absolute top-6 ">
          <h2 className="text-3xl font-medium text-primary">FAQ</h2>
        </div>
        <FaqCard
          title=" Do's and Dont's"
          sectinWrapperClassName="mt-2 "
          points={DOES_NOT_POINTS}
        />

        <FaqCard
          title="Mic not working or speech to text not working"
          icon="pepicons-pop:microphone-circle-off"
          points={MICROPHONE_POINTS}
        />
        <FaqCard
          title="Unable to take selfie or camera error or camera not working
"
          icon="pepicons-pop:photo-camera-circle-off"
          points={CAMERA_POINTS}
        />
        <FaqCard
          title="Voice of the virtual interviewer is suddenly lost or you are unable to hear"
          icon="carbon:voice-activate"
          points={VIRTUAL_POINTS}
        />

        <FaqCard
          title="Submit not working"
          btnText="submit"
          points={SUBMIT_POINTS}
        />
      </div>
    </Modal>
  );
}

export default FaqModal;
