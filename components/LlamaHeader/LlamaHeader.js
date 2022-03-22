import { Toolbar } from "@mui/material";
import LlamaAppBar from "../LlamaAppBar/LlamaAppBar";

export default function LLamaHeader({ children }) {
  return (
    <header>
      <LlamaAppBar></LlamaAppBar>
      <Toolbar></Toolbar>
      {children}
    </header>
  );
}