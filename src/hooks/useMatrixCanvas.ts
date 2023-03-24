import { useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

export const useMatrixCanvas = ({ canvasId }: { canvasId: string }) => {
  const { width: canvasWidth, height: canvasHeight } = useWindowSize();

  useEffect(() => {
    // let drawIntervalId: string | undefined = undefined;

    if (!canvasWidth || !canvasHeight) return;

    // Initialising the canvas
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;

    const ctx = canvas.getContext("2d");
    // Setting the width and height of the canvas
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // Setting up the letters
    var letters =
      "01ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ01ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ01ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ".split(
        ""
      );
    // Setting up the columns
    var fontSize = 20,
      columns = (canvasWidth ?? canvas.width) / fontSize;
    // Setting up the drops
    var drops: Array<number> = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    // Setting up the draw function
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvasWidth ?? 0, canvasHeight ?? 0);
      if (!canvas) return;
      ctx.fillStyle = "transparent";
      ctx.fillRect(
        0,
        0,
        canvasWidth ?? canvas.width,
        canvasHeight ?? canvas.height
      );
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#0f0";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    let drawIntervalId = setInterval(() => {
      draw();
    }, 33);

    return () => {
      clearInterval(drawIntervalId);
    };
  }, [canvasHeight, canvasWidth]);

  return {
    canvasWidth,
    canvasHeight,
  };
};
