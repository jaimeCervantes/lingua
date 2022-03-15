import LlamaFooter from "../LlamaFooter/LlamaFooter";
import LLamaHeader from "../LlamaHeader/LlamaHeader";

export default function Generic({ children }) {
  return (
    <>
      <LLamaHeader></LLamaHeader>
      <main>{children}</main>
      <LlamaFooter></LlamaFooter>
    </>
  );
}