import { useCountryQuestionsContext } from "../context/CountryQuestionsProvider";


const QuestionsNumbers = () => {
    const {questionAnswers,currentSelectedQuestion,handleQuestionSelect} = useCountryQuestionsContext();
    // const questions_numbers:number[] = Array.from({ length: questionAnswers.length }, (_, index) => index + 1);
    return (
        <div className="md:grid md:grid-flow-col w-full md:gap-5 pt-5 align-middle justify-center sm:flex sm:flex-wrap sm:w-96 sm:gap-5 max-sm:gap-5 sm:justify-center sm:justify-self-center sm:py-6    max-sm:flex max-sm:flex-wrap max-sm:w-96 max-sm:justify-center max-sm:justify-self-center max-sm:py-6">
            {questionAnswers.map(question_number=>{
                return (
                    <p key={question_number.id}
                     onClick={()=>handleQuestionSelect(question_number.id)}  // handleQuestionSelect(question_number.id) is a function that you need to implement in your component.
                     className={question_number.id===currentSelectedQuestion.id ?'cursor-pointer rounded-full bg-gradient-to-r from-color_1_grident to-color_2_grident  text-color_3 w-10 h-10 text-center pt-2': `cursor-pointer rounded-full bg-color_4 text-color_3 w-10 h-10 text-center pt-2 hover:from-color_1_grident hover:to-color_2_grident hover:bg-gradient-to-r`}
                    >{question_number.id}</p>
                );
            })}
        </div>
    );
}

export default QuestionsNumbers;
