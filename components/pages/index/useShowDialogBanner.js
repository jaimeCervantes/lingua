import { useEffect, useState } from "react";

export default function useShowDialogBanner(delay = 2000) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if(!show) {
      setTimeout(() => {
        setShow(true);
      }, delay);
    }
  }, [delay, show]);

  return show;
}
