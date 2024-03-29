import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LlamaShowOnScrollAppBar from "../LlamaShowOnScrollAppBar/LlamaShowOnScrollAppBar";
import LlamaLogo from "../LlamaLogo/LlamaLogo";
import LlamaMenu from "../LlamaMenu/LlamaMenu";
import LlamaSocialNetworks from "../LlamaSocialNetworks/LlamaSocialNetworks";
import LlamaTelButton from "../LlamaTelButton/LlamaTelButton";
import LlamaButton from "../Buttons/LlamaButton";

export default function LlamaAppBars({ openMenu }) {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);

  return (
    <>
      <LlamaShowOnScrollAppBar elevation={0}>
        <LlamaLogo></LlamaLogo>

        <LlamaMenu
          sx={{
            flexGrow: 1,
            display: "flex",
            marginLeft: { md: "1rem" },
            "@media(max-width: 1016px)": {
              display: "none",
            },
            wordBreak: "break-all",
          }}
        ></LlamaMenu>

        <Box
          sx={{
            flexGrow: 1,
            display: "none",
            "@media(max-width: 1016px)": {
              display: "initial",
            },
            justifyContent: "start",
            marginLeft: "1rem",
          }}
        >
          <LlamaButton
            startIcon={<MenuIcon></MenuIcon>}
            onClick={() => setIsOpenedMenu(true)}
          >
            Menu
          </LlamaButton>
        </Box>

        <LlamaSocialNetworks
          sx={{
            "@media(max-width: 1467px)": {
              display: "none",
            },
          }}
        ></LlamaSocialNetworks>
        <LlamaTelButton
          sx={{
            justifyContent: "end",
            "@media(max-width: 1187px)": {
              display: "none",
            },
          }}
        ></LlamaTelButton>
      </LlamaShowOnScrollAppBar>
      <Drawer
        anchor="left"
        open={isOpenedMenu}
        onClose={() => setIsOpenedMenu(false)}
      >
        <Box sx={{ padding: "1rem" }}>
          <LlamaLogo
            onClick={() => setIsOpenedMenu(false)}
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "200px",
              marginBottom: "1rem",
            }}
          ></LlamaLogo>
          <LlamaMenu
            onClick={() => setIsOpenedMenu(false)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              marginBottom: "1rem",
            }}
          ></LlamaMenu>
          <LlamaSocialNetworks
            sx={{ marginBottom: "1rem" }}
          ></LlamaSocialNetworks>
          <LlamaTelButton flexDirection="column"></LlamaTelButton>
        </Box>
      </Drawer>
    </>
  );
}
