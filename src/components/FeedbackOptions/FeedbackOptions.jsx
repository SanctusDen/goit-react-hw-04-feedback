import { Button, Wrapper } from "./FeedbackOptions.module";


export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
    return (
        <>
            <Wrapper>
                {options.map(option => (
                    <Button   onClick={options} value={option}>
                        {options}
                    </Button>
                ))}
            </Wrapper>
        </>
    );
};
