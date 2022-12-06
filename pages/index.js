import LlamaFooter from "../components/LlamaFooter/LlamaFooter";

import styles from "./index.module.css";
import LlamaSocialNetworks from "../components/LlamaSocialNetworks/LlamaSocialNetworks";
import MainMenu from "../components/pages/index/MainMenu";
import LanguagesAndCarousel from "../components/pages/index/LanguagesAndCarousel";
import LlamaMenu from "../components/LlamaMenu/LlamaMenu";
import LlamaPlacementTestButton from "../components/Buttons/LlamaPlacementTestButton";
import { useRef } from "react";
import useLinguaHouseWidget from "../components/pages/index/useLinguaHouseWidget";
import useShowDialogBanner from "../components/pages/index/useShowDialogBanner";

export { getStaticProps } from "../pagesFn/index/functions";
export default function Index({ homeImages, index, languages }) {
  const linguahouseContainer = useRef(null);

  const DialogBanner = useShowDialogBanner(2000);
  useLinguaHouseWidget(linguahouseContainer)

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

      <MainMenu enterText={index.enterText}></MainMenu>

      <LanguagesAndCarousel
        homeImages={homeImages}
        languages={languages}
      ></LanguagesAndCarousel>

      <section ref={linguahouseContainer}>

      </section>

      <LlamaFooter
        copyRight={index.copyRight}
        color="primary.main"
      ></LlamaFooter>

      {DialogBanner ? (<DialogBanner />) : null}
    </>
  );
}

Index.getLayout = function (page) {
  return <div className={styles.index}>
    {page}
    <LlamaPlacementTestButton></LlamaPlacementTestButton>
  </div>;
};
