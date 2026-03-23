'use client';

import { Fragment } from "react";
import { uploadVideo } from "./firebase/functions";

import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

export default function Upload() {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);
    if (file) {
      handleUpload(file);
    }
  };

  const handleUpload = async (file: File) => {
    try {
      const response = await uploadVideo(file);
      alert(`File uploaded successfully. Server responded with: ${JSON.stringify(response)}`);
    } catch (error) {
      alert(`Failed to upload file: ${error}`);
    }
  };

  return (
    <Fragment>
      <Field>
        <FieldLabel htmlFor="video">Video</FieldLabel>
        <Input id="video" type="file" accept="video/*" onChange={handleFileChange}/>
        <FieldDescription>Select a video to upload.</FieldDescription>
      </Field>
    </Fragment>
  );
}