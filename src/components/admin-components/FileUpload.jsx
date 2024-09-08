import Dropzone from "react-dropzone";
import { FolderUp, X } from "lucide-react";

import FileUploadModal from "@/components/admin-components/FileUploadModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FileUpload = ({ optionNotPresent }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileHandler = (acceptedFiles) => {
    setSelectedFiles(acceptedFiles);
  };

  const clearHandler = () => {
    setSelectedFiles([]);
  };

  const removeFileHandler = (fileIndex) => {
    const updatedFiles = selectedFiles.filter(
      (_, index) => index !== fileIndex
    );
    setSelectedFiles(updatedFiles);
  };
  return optionNotPresent ? (
    <FolderUp
      color="grey"
      style={{
        outline: "none",
        border: "none",
      }}
    />
  ) : (
    <FileUploadModal>
      {/* <input type="text" name="" id="" /> */}
      <Dropzone onDrop={fileHandler}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="min-w-full border-dotted border-2 border-sky-500 rounded-lg py-3 my-4"
          >
            <input {...getInputProps()} />
            <div className="flex justify-center">
              <FolderUp />
              <span className="mx-2"> Select Files or Drop Folder</span>
            </div>
          </div>
        )}
      </Dropzone>

      <div className="md:h-max-[380px] overflow-y-scroll">
        {selectedFiles.length > 0 &&
          selectedFiles.map((file, index) => {
            return (
              <div className="flex justify-between" key={index}>
                <p>{file.name}</p>

                <X
                  onClick={() => removeFileHandler(index)}
                  className="cursor-pointer"
                />
              </div>
            );
          })}
      </div>
      <div>
        {selectedFiles.length > 0 && (
          <div className="my-4">
            <Button>Upload Files</Button>
            <Button className="mx-2" onClick={clearHandler}>
              Clear
            </Button>
          </div>
        )}
      </div>
    </FileUploadModal>
  );
};

export default FileUpload;
