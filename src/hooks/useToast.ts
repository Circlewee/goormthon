import { toast, ToastOptions } from 'react-toastify';

const ToastId = 'JejuIleum_Toast';

const useToast = () => {
  const option: ToastOptions = {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'dark',
    toastId: ToastId,
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
