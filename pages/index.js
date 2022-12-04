import LlamaFooter from "../components/LlamaFooter/LlamaFooter";

import styles from "./index.module.css";
import LlamaSocialNetworks from "../components/LlamaSocialNetworks/LlamaSocialNetworks";
import MainMenu from "../components/pages/index/MainMenu";
import EnterSiteLanguagesCarousel from "../components/pages/index/EnterSiteLanguagesCarousel";
import LlamaMenu from "../components/LlamaMenu/LlamaMenu";
import LlamaDialog from "../components/LlamaDialog/LlamaDialog";
import { DialogContent } from "@mui/material";

export { getStaticProps } from "../pagesFn/index/functions";

export default function Index({ homeImages, index, languages }) {
  return (
    <>
      <LlamaMenu
        sx={{
          color: "primary.main",
          flexGrow: 1,
          marginLeft: "0.3rem",
          "@media (max-width: 480px)": {
            display: "none",
          },
        }}
      ></LlamaMenu>
      <header className={styles.header}>
        <picture className={styles.logo}>
          <source srcSet="/logo.png" type="image/png" />
          <img src="/logo.png" alt="Linguallama Logo" className={styles.logo} />
        </picture>
        <div style={{ textAlign: "center" }}>
          <h1 className={styles.title}>Welcome to LinguaLlama</h1>
          <p style={{ margin: 0 }}>Serving all languages worldwide</p>
        </div>
        <picture className={styles.flags}>
          <source srcSet="/illustrations/flags.svg" type="image/svg" />
          <img
            src="/illustrations/flags.svg"
            alt="Linguallama face and flags"
            className={styles.flags}
          />
        </picture>
      </header>

      <LlamaSocialNetworks
        color="primary.main"
        sx={{ textAlign: "center" }}
      ></LlamaSocialNetworks>

      <MainMenu></MainMenu>

      <EnterSiteLanguagesCarousel
        homeImages={homeImages}
        languages={languages}
        enterText={index.enterText}
      ></EnterSiteLanguagesCarousel>

      <LlamaFooter
        copyRight={index.copyRight}
        color="primary.main"
      ></LlamaFooter>

      <LlamaDialog
        open={true}
        fullWidth={true}
        maxWidth={"xl"}
        scroll={"paper"}
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
    </>
  );
}

Index.getLayout = function (page) {
  return <div className={styles.index}>{page}</div>;
};
