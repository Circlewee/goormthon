import { toast, ToastOptions } from 'react-toastify';

const useToast = () => {
  const option: ToastOptions = {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  };

  const success = (message: string) => {
    toast.success(message, option);
  };

  const error = (message: string) => {
    toast.error(message, option);
  };

  return { success, error };
};

export default useToast;
