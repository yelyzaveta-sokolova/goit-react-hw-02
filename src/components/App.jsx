import { useState, useEffect } from "react";
import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

export default function App() {
  const [option, setOption] = useState(() => {
    const feedbackValueLS = localStorage.getItem("feedbackValue");
    const parseValueLS = JSON.parse(feedbackValueLS) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    return parseValueLS;
  });

  const updateFeedback = (feedbackType) => {
    setOption({ ...option, [feedbackType]: option[feedbackType] + 1 });
  };
  function resetFeedback() {
    setOption({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  useEffect(() => {
    const strfiedValue = JSON.stringify(option);
    localStorage.setItem("feedbackValue", strfiedValue);
  }, [option]);

  const totalFeedback = option.good + option.neutral + option.bad;
  const positiveFeedback = Math.round((option.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          option={option}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )} 
   </div>
  );
}