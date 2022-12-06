import { lazy, useEffect, useState } from "react";
const loadDialogBanner = () => import('./DialogBanner');
const DialogBanner = lazy(loadDialogBanner);

export default function useShowDialogBanner(delay = 2000) {
  const [dialog, setDialog] = useState(null);

  useEffect(() => {
    if (!dialog) {
      setTimeout(() => {
        loadDialogBanner()
        setDialog(DialogBanner);
      }, delay)
    }
  }, [delay, dialog]);

  return dialog;
}
