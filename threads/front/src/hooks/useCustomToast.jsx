import { useToast } from "@chakra-ui/react";

const useCustomToast = () => {
  const toast = useToast();
  const showToast = (title, status) => {
    toast({
      title: title,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  return showToast;
};

export default useCustomToast;
