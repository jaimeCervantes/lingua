import { forwardRef } from "react";
import LlamaDialog from "../../LlamaDialog/LlamaDialog";
import { DialogContent } from "@mui/material";
import styles from "./DialogBanner.module.css";
import Slide from "@mui/material/Slide";
import useShowDialogBanner from './useShowDialogBanner';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide in={true} direction="down" ref={ref} {...props} />;
});

export default function DialogBanner() {
  const shouldShow = useShowDialogBanner(2000);

  if(!shouldShow) {
    return null;
  }

  return (
    <LlamaDialog
      open={true}
      fullWidth={true}
      maxWidth={"xl"}
      scroll={"paper"}
      TransitionComponent={Transition}
    >
      <DialogContent dividers={true}>
        <section className={styles.programs}>
          <img
            className={styles.programs__img}
            src="illustrations/crash-course.jpeg"
            alt="Foreign Language Crash course"
          />
        </section>
      </DialogContent>
    </LlamaDialog>
  );
}
