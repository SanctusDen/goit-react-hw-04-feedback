export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedback,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback Percentage: {countPositiveFeedback}%</p>
    </div>
  );
};