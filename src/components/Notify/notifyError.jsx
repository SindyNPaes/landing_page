import { toast } from 'react-toastify';
import { PiSealWarningDuotone } from 'react-icons/pi';
export default function notifyError(msg) {
  toast.error(
    <div className="flex items-center">
      <PiSealWarningDuotone className="mr-3 text-2xl text-red-700" />
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
