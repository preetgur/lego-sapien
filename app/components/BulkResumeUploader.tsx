"use client";
import React, { useState } from "react";

import Button from "./Button";
import { notify } from "../helpers/NotificationHelper";
import BulkResumeModal from "../Modals/BulkResumeModal";
import { useAuth } from "../contextApi/AuthContext";

export default function BulkResumeUploader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const { id } = user || {};

  console.log({ user });
  return (
    <div>
      <Button
        label="Bulk Upload"
        onClick={() => {
          if (typeof id !== "undefined" && +id > 46) {
            notify({
              type: "error",
              message: "This feature is available for paid subscription.",
            });
            return;
          }

          setIsModalOpen(true);
        }}
        styleWrapper="h-12"
      />
      {isModalOpen && (
        <BulkResumeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
