import React, { createContext, useContext, useState } from "react";
import { NotificationContext } from "./NotificationContext";

const UploadContext = createContext();

const UploadProvider = ({ children }) => {
  const [uploads, setUploads] = useState([]);
  const [isUploading, setIsUploading] = useState({});
  const [failedUploads, setFailedUploads] = useState({});

  const { setNotifications } = useContext(NotificationContext);

  // Update progress for a specific upload
  const updateProgress = (jobId, index, progress) => {
    setUploads((prevUploads) =>
      prevUploads.map((upload) =>
        upload.jobId === jobId
          ? { ...upload, progress: { ...upload.progress, [index]: progress } }
          : upload
      )
    );
  };

  // Mark upload as failed
  const markAsFailed = (jobId, index, file, jobName) => {
    setFailedUploads((prevFailed) => ({
      ...prevFailed,
      [jobId]: [...(prevFailed[jobId] || []), index],
    }));
    setNotifications((prev) => [
      ...prev,
      {
        message: `File ${file.path} failed to upload for ${jobName}`,
        status: false,
        id: file.path,
      },
    ]);
  };

  // Mark job as complete
  const completeUpload = (jobId, jobName) => {
    setIsUploading((prev) => ({ ...prev, [jobId]: false }));
    setNotifications((prev) => [
      ...prev,
      {
        message: `Files for ${jobName} uploaded successfully`,
        status: true,
        id: jobId,
      },
    ]);
    setUploads((prevUploads) =>
      prevUploads.filter((upload) => upload.jobId !== jobId)
    );
  };

  // Check if all files for a job are uploaded
  const checkAllUploaded = (jobId) => {
    const upload = uploads.find((upload) => upload.jobId === jobId);
    return upload && Object.values(upload.progress).every((p) => p === 100);
  };

  // Start upload process
  const startUpload = (files, uploadFunction, jobName, jobId) => {
    const newUpload = { jobId, files, jobName, progress: {} };

    setUploads((prev) => [...prev, newUpload]);
    setIsUploading((prev) => ({ ...prev, [jobId]: true }));

    files.forEach((file, index) => {
      uploadFunction(file, index, jobId)
        .then(() => updateProgress(jobId, index, 100))
        .catch((error) => {
          console.error("Error uploading file:", error);
          updateProgress(jobId, index, 0);
          markAsFailed(jobId, index, file, jobName);
        })
        .finally(() => {
          if (checkAllUploaded(jobId)) {
            completeUpload(jobId, jobName);
          }
        });
    });
  };

  // Retry a failed upload
  const retryUpload = (file, index, uploadFunction, jobName, jobId) => {
    setFailedUploads((prevFailed) => ({
      ...prevFailed,
      [jobId]: (prevFailed[jobId] || []).filter((i) => i !== index),
    }));

    uploadFunction(file, index, jobId)
      .then(() => updateProgress(jobId, index, 100))
      .catch((error) => {
        console.error("Error uploading file:", error);
        updateProgress(jobId, index, 0);
        markAsFailed(jobId, index, file, jobName);
      })
      .finally(() => {
        if (checkAllUploaded(jobId)) {
          completeUpload(jobId, jobName);
        }
      });
  };

  return (
    <UploadContext.Provider
      value={{
        uploads,
        startUpload,
        isUploading,
        failedUploads,
        retryUpload,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export { UploadContext, UploadProvider };
