import { useEffect, useState } from "react";

export default function useShowDialogBanner(callback, delay = 2000) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(!show) {
      setTimeout(() => {
        callback()
        setShow(true);
      }, delay);
    }
  }, [callback, delay, show]);

  return show;
}
