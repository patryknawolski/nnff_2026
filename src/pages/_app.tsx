import { useMatrixCanvas } from "@/hooks/useMatrixCanvas";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "98.css";
import "@/styles/98-overwrites.css";
import matrixCanvasStyles from "@/styles/matrix-canvas.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const { canvasWidth, canvasHeight } = useMatrixCanvas({
    canvasId: "matrix-canvas",
  });

  return (
    <main>
      <Component {...pageProps} />
      {/* {typeof window !== "undefined" ? ( */}
      <canvas
        id="matrix-canvas"
        className={matrixCanvasStyles.canvas}
        // style={matrixCanvasStyles.canvas}
        width={canvasWidth}
        height={canvasHeight}
      ></canvas>
      {/* ) : null} */}
    </main>
  );
}
