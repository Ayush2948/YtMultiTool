import React, { useState } from "react";
import axios from "axios";

function VideoUploadForm() {
  const [videos, setVideos] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setVideos(selectedFiles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    videos.forEach((video, index) => {
      formData.append(`video_${index}`, video);
    });

    try {
      await axios.post("http://your-backend-url/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Videos uploaded successfully!");
    } catch (error) {
      console.error("Error uploading videos:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="video/*"
        multiple
        onChange={handleFileChange}
      />
      <submit type="submit">Upload Videos</submit>
    </form>
  );
}

export default VideoUploadForm;
