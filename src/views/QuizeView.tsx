import QuestionsNumbers from '../components/QuestionsNumbers';
import Question from '../components/Question';
import AnswersOptions from '../components/AnswersOptions';
import { useCountryQuestionsContext } from '../context/CountryQuestionsProvider';

const QuizeView = () => {
    const{number_of_answered, questionAnswers} = useCountryQuestionsContext();
   if(number_of_answered !== questionAnswers.length )
   {
    return (
        <div className="absolute m-auto inset-0 md:grid md:grid-flow-row md:grid-rows-[50px_120px_auto] sm:grid sm:grid-rows-[50px_150px_auto] max-sm:grid-rows-[50px_180px_auto] justify-center max-sm:w-[98vw] md:w-[800px] grid max-sm:h-[500px] sm:w-[96vw] sm:h-[500px]  rounded-md bg-color_2 font-sans md:aspect-video ">
            <p className="text-color_7 font-bold justify-self-center pt-5">
            Country Quiz
            </p>
            <QuestionsNumbers />
            <Question />
            <AnswersOptions />
        </div>
    );
   }
}

export default QuizeView;
