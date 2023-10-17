export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback Percentage: {positive}%</p>
    </div>
  );
};
