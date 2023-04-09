import { CSSProperties } from "react";
import styles from "./w98Window.module.css";

export const W98Window = ({ style }: { style: CSSProperties }) => (
  <div className={styles.w98Window} style={style}>
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">A Window With Stuff In It</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <p>There's so much room for activities!</p>
      </div>
    </div>
  </div>
);
