import { useState } from "react";
import useCustomToast from "./useCustomToast";

const useImage = (e) => {
  const showToast = useCustomToast();
  const [imgUrl, setImgUrl] = useState(null);

  const handleImgChange = () => {
    const file = e.target.files[0];

    if (file && file.type.contains("image")) {
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

  return { imgUrl, handleImgChange };
};

export default useImage;
