import { toast } from 'react-toastify';
import { PiSealCheckBold } from 'react-icons/pi';
export default function notifySuccess(msg) {
  toast.success(
    <div className="flex items-center">
      <PiSealCheckBold className="mr-3 text-2xl text-green-700" />
      {msg}
    </div>,
    {
      position: 'bottom-right',
      hideProgressBar: true,
      theme: 'light',
      icon: false,
      className: "border-2 border-primary rounded-lg",
    }
  );
}
