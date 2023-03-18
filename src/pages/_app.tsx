import { useMatrixCanvas } from "@/hooks/useMatrixCanvas";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useMatrixCanvas({ canvasId: "matrix-canvas" });

  return (
    <>
      <canvas
        id="matrix-canvas"
        style={{
          padding: 0,
          margin: 0,
          zIndex: 1,
          position: "fixed",
          top: 0,
          opacity: 0.1,
          left: 0,
          background: "transparent",
        }}
        width="2560"
        height="1440"
      ></canvas>
      <Component {...pageProps} />
    </>
  );
}
