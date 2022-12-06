import { forwardRef } from "react";
import LlamaDialog from "../../LlamaDialog/LlamaDialog";
import { DialogContent } from "@mui/material";
import styles from "./DialogBanner.module.css";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide in={true} direction="down" ref={ref} {...props} />;
});

export default function DialogBanner() {
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
          <picture className={styles.programs__img}>
            <source
              srcSet="/illustrations/ielts-english.jpeg"
              type="image/jpeg"
            />
            <img
              src="/illustrations/ielts-english.jpeg"
              alt="IELTS english"
              className={styles.programs__img}
            />
          </picture>
          <picture className={styles.programs__img}>
            <source
              srcSet="/illustrations/dele-spanish.jpeg"
              type="image/jpeg"
            />
            <img
              src="/illustrations/dele-spanish.jpeg"
              alt="DELE Spanish"
              className={styles.programs__img}
            />
          </picture>
        </section>
      </DialogContent>
    </LlamaDialog>
  );
}
