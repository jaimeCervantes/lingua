import LlamaFooter from "../components/LlamaFooter/LlamaFooter";

import styles from "./index.module.css";
import LlamaSocialNetworks from "../components/LlamaSocialNetworks/LlamaSocialNetworks";
import MainMenu from "../components/pages/index/MainMenu";
import LanguagesAndCarousel from "../components/pages/index/LanguagesAndCarousel";
import LlamaMenu from "../components/LlamaMenu/LlamaMenu";
import LlamaPlacementTestButton from "../components/Buttons/LlamaPlacementTestButton";
import DialogBanner from "../components/pages/index/DialogBanner";

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
          <source srcSet="/illustrations/flags.png" type="image/png" />
          <img
            src="/illustrations/flags.png"
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

      <LlamaFooter
        copyRight={index.copyRight}
        color="primary.main"
      ></LlamaFooter>

      <DialogBanner />
    </>
  );
}

Index.getLayout = function (page) {
  return <div className={styles.index}>
    {page}
    <LlamaPlacementTestButton></LlamaPlacementTestButton>
  </div>;
};
