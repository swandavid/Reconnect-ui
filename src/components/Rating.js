<div tw="grid grid-cols-3 justify-items-center">
{hasRating ? 
<ActivityContainer>
    <QuestionText>Did you finish the activity?</QuestionText>
    <div tw="m-4">
    <label tw="inline-flex items-center">
        <input type="radio" tw="text-green-500" name="answerType" value="yes" required/>
        <span tw="ml-2 font-display font-semibold text-green-600 text-lg">Yes!!</span>
    </label>
    <label tw="inline-flex items-center ml-6">
        <input type="radio" tw="text-green-500" name="answerType" value="no" required/>
        <span tw="ml-2 font-display font-semibold text-green-600 text-lg">Not Today :(</span>
    </label>
    </div>
    <RatingContainer>
        {
            (() => {
                if (rating==1)
                    return  <>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            </>
                if (rating==2)
                    return  <>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            </>
                if (rating==3)
                    return  <>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            </>
                if (rating==4)
                    return  <>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            </>
                if (rating==5)
                    return  <>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            <StarIcon tw="stroke-current text-yellow-500"/>
                            </>
                else
                    return  <>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            <StarIcon tw="stroke-current text-gray-500"/>
                            </>
            })()
        }
    </RatingContainer>
    <div tw="flex flex-row">
        <RatingNumberButton onClick={() => setRating(1)}>1</RatingNumberButton>
        <RatingNumberButton onClick={() => setRating(2)}>2</RatingNumberButton>
        <RatingNumberButton onClick={() => setRating(3)}>3</RatingNumberButton>
        <RatingNumberButton onClick={() => setRating(4)}>4</RatingNumberButton>
        <RatingNumberButton onClick={() => setRating(5)}>5</RatingNumberButton>
    </div>
    <SubmitRatingButton onClick={handleIncreaseXP}>Submit Rating</SubmitRatingButton>
</ActivityContainer>
: null}
</div>