import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </li>
        );
      })}
    </List>
  );
};

