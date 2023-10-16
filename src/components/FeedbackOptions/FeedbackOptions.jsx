import { Button, Wrapper } from "./FeedbackOptions.module";


export const FeedbackOptions = ({ options, handleFeedback }) => {
    return (
        <>
            <Wrapper>
                {options.map(option => (
                    <Button  key={option} onClick={handleFeedback} value={options}>
                        {option}
                    </Button>
                ))}
            </Wrapper>
        </>
    );
};
