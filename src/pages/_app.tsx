import { useMatrixCanvas } from "@/hooks/useMatrixCanvas";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import matrixCanvasStyles from "@/styles/matrix-canvas.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const { canvasWidth, canvasHeight } = useMatrixCanvas({
    canvasId: "matrix-canvas",
  });

  return (
    <main>
      <Component {...pageProps} />
      <canvas
        id="matrix-canvas"
        className={matrixCanvasStyles.canvas}
        width={canvasWidth}
        height={canvasHeight}
      ></canvas>
    </main>
  );
}
