import React from "react";
import { useParams } from "next/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { ModalPropsInterface } from "@/types/job";

import {
  ADD_QUESTION_CATEGORY,
  IDEAL_ANSWER,
  QUESTION,
} from "@/app/lib/constants";
import Modal from "./Modal";
import { addQuestionToCategory } from "@/app/serverActions/questionBank";
import { useUI } from "../contextApi/UIContext";
import { notify } from "../helpers/NotificationHelper";
import InputField from "../components/InputField";

interface DefaultValues {
  [QUESTION]: string;
  [IDEAL_ANSWER]: string;
}

function AddQuestionModal({ isOpen, onClose }: ModalPropsInterface) {
  const { categoryID } = useParams();
  const { startLoading, stopLoading } = useUI();

  const defaultValues: DefaultValues = {
    [QUESTION]: "",
    [IDEAL_ANSWER]: "",
  };

  const addQuestionSchema = yup.object({
    [QUESTION]: yup.string().required("Question is required."),
    [IDEAL_ANSWER]: yup.string().required("Ideal answer is required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addQuestionSchema),
    defaultValues,
  });

  const onSubmit = async (data: DefaultValues) => {
    try {
      console.log({ data });
      startLoading();

      await addQuestionToCategory({
        qb_category: categoryID as string,
        ...data,
      });

      notify({
        type: "success",
        message: `question added successfully`,
      });
      onClose();
    } catch (error: any) {
      notify({
        type: "error",
        message: "Something went wrong while add question",
      });
    } finally {
      stopLoading();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={onClose}
      title="Add Question"
      panelStyle={{
        width: "60%",
      }}
    >
      <div className="flex w-full items-center justify-center py-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col flex-wrap items-center justify-center space-y-4  "
        >
          {Object.keys(defaultValues).map((key: string) => {
            const specificKey = key as keyof typeof defaultValues;

            return (
              <InputField
                key={specificKey}
                className=" px-4 md:w-1/2"
                name={specificKey}
                type={ADD_QUESTION_CATEGORY[specificKey]?.type}
                label={ADD_QUESTION_CATEGORY[specificKey]?.label}
                placeholder={ADD_QUESTION_CATEGORY[specificKey]?.placeholder}
                register={register as any}
                error={errors[specificKey]?.message}
              />
            );
          })}

          <div className=" flex items-center justify-center pt-4">
            <button className="m-auto flex h-10 w-full  max-w-xs items-center justify-center rounded-md bg-primary py-4 px-9 text-center text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
              Add
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddQuestionModal;
