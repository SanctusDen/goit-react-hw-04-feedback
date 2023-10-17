import { Button, Wrapper } from "./FeedbackOptions.module";


export const FeedbackOptions = ({ options, handleFeedback }) => {
    return (
        <>
            <Wrapper>
                {options.map(option => (
                    <Button   onClick={handleFeedback} value={option}>
                        {option}
                    </Button>
                ))}
            </Wrapper>
        </>
    );
};
