"use client";
import React, { ReactNode } from "react";
import { Dialog } from "@headlessui/react";
import { Icon } from "@iconify/react";

import classNames from "classnames";
import Divider from "../components/Divider";

interface ModalProps {
  isOpen: boolean;
  isCloseIconAsText?: boolean;
  title?: string;
  titleClassName?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  panelStyle?: object;
  childrenStyleWrapper?: string;
  titleStyle?: object;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  children,
  title,
  panelStyle,
  titleStyle,
  titleClassName,
  childrenStyleWrapper,
  isCloseIconAsText = false,
}) => {
  return (
    <div className="relative">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={"relative"}
      >
        <div
          className="fixed inset-0 z-999999 bg-secondaryBlack bg-opacity-60"
          aria-hidden="true"
        />
        <div className="fixed inset-0 z-999999 flex items-center justify-center overflow-scroll p-2 shadow-2 md:px-4">
          <Dialog.Panel
            className={classNames(
              `relative flex flex-col items-center justify-center rounded-md bg-white shadow-white `,
              {
                "!bg-primary": true,
              }
            )}
            style={panelStyle}
          >
            {title && (
              <>
                <Dialog.Title
                  className={classNames(
                    `mt-3 flex items-start py-2 text-3xl capitalize text-secondaryBlack`,
                    titleClassName
                  )}
                  style={titleStyle}
                >
                  {title}
                </Dialog.Title>

                <Divider />
              </>
            )}
            {isCloseIconAsText ? (
              <button
                onClick={() => setIsOpen(false)}
                className=" absolute top-0 right-0 mr-6 mt-5 cursor-pointer font-medium text-primary"
              >
                {`Skip >>`}
              </button>
            ) : (
              <Icon
                icon="ic:baseline-close"
                className=" absolute top-0 right-0 mr-6 mt-5 cursor-pointer text-primary"
                onClick={() => setIsOpen(false)}
              />
            )}

            <div
              className={classNames(
                `flex w-full flex-col items-center justify-center  px-20
                ${childrenStyleWrapper}`
              )}
            >
              {children}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Modal;
