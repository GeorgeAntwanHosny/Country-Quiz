import { useCountryQuestionsContext } from "../context/CountryQuestionsProvider";


const Question = () => {
    const {currentSelectedQuestion} = useCountryQuestionsContext();
    return (
        <div className='justify-self-center text-color_3 font-bold text-xl max-sm:w-[95vw] text-center'>
           {currentSelectedQuestion.question}
        </div>
    );
}

export default Question;
