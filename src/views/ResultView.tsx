import congrats from "../assets/images/congrats.svg";
import { useCountryQuestionsContext } from "../context/CountryQuestionsProvider";

const ResultView = () => {
    const {result,questionAnswers,number_of_answered,handelPlayAgain} = useCountryQuestionsContext();
    if(number_of_answered === questionAnswers.length )
    {
    return (
        <div className="absolute m-auto inset-0 grid  grid-flow-row align-middle justify-items-center pt-6 text-lg font-bold justify-center max-sm:w-[80vw] md:w-[500px]  max-sm:h-[500px] sm:w-[80vw] sm:h-[500px] rounded-md bg-color_2 font-sans md:aspect-video text-color_3">
            <img src={congrats} alt='congrats icon'/>
            <p>Congrats! You completed the quiz.</p>
            <p>You answer {result}/{questionAnswers.length} correctly.</p>
            <button 
                onClick={()=>handelPlayAgain()}
                className="bg-gradient-to-r from-color_1_grident to-color_2_grident w-64 h-14 rounded-xl"
            >Play again</button>
        </div>
    );
}
}

export default ResultView;
