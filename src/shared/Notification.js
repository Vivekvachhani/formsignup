import { toast } from 'react-toastify'; // Notification message container

export const showNotification = (message, type, timeOut = 5000) => toast(
  `${message}`,
  {
    type, // allowed types ["info","success","warning","error","default"]
    autoClose: timeOut,
  },
);