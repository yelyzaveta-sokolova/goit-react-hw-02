import { useState } from "react";
import styles from "./Options.module.css";
export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 ? (
        <button
          className={`${styles.resetStatus} ${styles.isVisible}`}
          onClick={resetFeedback}
        >
          Reset
        </button>
      ) : (
        <button className={`${styles.resetStatus}`}>Reset</button>
      )}
    </div>
  );
}