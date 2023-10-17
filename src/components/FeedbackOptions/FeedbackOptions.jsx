import { Button, Wrapper } from "./FeedbackOptions.module";


export const FeedbackOptions = ({ options, handleFeedback }) => {
    return (
        <>
            <Wrapper>
                {options.map(option => (
                    <Button  key={option} 
                    onClick={() => handleFeedback(option)} >
                        {option}
                    </Button>
                ))}
            </Wrapper>
        </>
    );
};
