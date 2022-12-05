import LlamaFooter from "../components/LlamaFooter/LlamaFooter";

import styles from "./index.module.css";
import LlamaSocialNetworks from "../components/LlamaSocialNetworks/LlamaSocialNetworks";
import MainMenu from "../components/pages/index/MainMenu";
import LanguagesAndCarousel from "../components/pages/index/LanguagesAndCarousel";
import LlamaMenu from "../components/LlamaMenu/LlamaMenu";
import LlamaDialog from "../components/LlamaDialog/LlamaDialog";
import { DialogContent } from "@mui/material";
import LlamaPlacementTestButton from "../components/Buttons/LlamaPlacementTestButton";
import { useEffect, useRef } from "react";

export { getStaticProps } from "../pagesFn/index/functions";

function parseQuery(e){for(var n={},o=("?"===e[0]?e.substr(1):e).split("&"),r=0;r<o.length;r++){var t=o[r].split("=");n[decodeURIComponent(t[0])]=decodeURIComponent(t[1]||"")}return n}

export default function Index({ homeImages, index, languages }) {
  const linguahouseContainer = useRef(null);
  
  useEffect(() => {
    let iframe = null;
    if (linguahouseContainer?.current) {
      let url = "https://www.linguahouse.com/remote/profile/2a623461-65ed-5b1e-10f7-ffb9724618ed";
      const newPasswordUrl = "https://www.linguahouse.com/remote/new-password/2a623461-65ed-5b1e-10f7-ffb9724618ed";
      const verifyEmailUrl = "https://www.linguahouse.com/remote/verify-email/2a623461-65ed-5b1e-10f7-ffb9724618ed";
      const addPdfCodeUrl = "https://www.linguahouse.com/remote/a/2a623461-65ed-5b1e-10f7-ffb9724618ed";
      const query = parseQuery(window.location.search);
      const width = "100%";
      const height = "800";
      
      iframe = document.createElement('iframe');
      
      if (query.new_password_token) {
          url = newPasswordUrl + '/' + query.new_password_token;
      } else if (query.verify_email_token) {
          url = verifyEmailUrl + '/' + query.verify_email_token;
      } else if (query.add_pdf_code) {
          url = addPdfCodeUrl + '/' + query.add_pdf_code;
      }
      
      iframe.setAttribute('class', 'linguahouse_profile_widget');
      iframe.setAttribute('src', url);
      iframe.setAttribute('width', width);
      iframe.setAttribute('height', height);
      iframe.setAttribute('frameborder', '0');
      linguahouseContainer.current.appendChild(iframe);
    }

    return () => {
      iframe?.remove();
    }
  }, [linguahouseContainer])

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
  return <div className={styles.index}>
    {page}
    <LlamaPlacementTestButton></LlamaPlacementTestButton>
  </div>;
};
