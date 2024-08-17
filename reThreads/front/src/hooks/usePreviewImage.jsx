import { useState } from "react";
import useCustomToast from "./useCustomToast";

const usePreviewImage = () => {
  const showToast = useCustomToast();
  const [imgUrl, setImgUrl] = useState(null);

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("image")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImgUrl(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      showToast("Invalid file type!", "error");
      setImgUrl(null);
    }
  };

  return { imgUrl, setImgUrl, handleImgChange };
};

export default usePreviewImage;
