import { CSSProperties } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import styles from "./w98Window.module.css";

export const W98Window = ({
  id,
  style,
}: {
  id: string;
  style: CSSProperties;
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const dndStyle = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      className={styles.w98Window}
      style={{ ...style, ...dndStyle }}
      {...listeners}
      {...attributes}
    >
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">nnff_2026</div>
          <div className="title-bar-controls">
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <p>1/1 HANDMADE PIECES</p>
          <p>Based in Katowice, Poland</p>
        </div>
      </div>
    </div>
  );
};
