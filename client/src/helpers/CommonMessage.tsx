import { toast } from "react-toastify";

export const CommonError = (msg: any) => {
  toast.error(msg, {
    /*ts-ignore*/
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
export const CommonSuccess = (msg: any) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
export function preventSpace(event: any) {
  if (event.key === " ") {
    event.preventDefault();
  }
}
