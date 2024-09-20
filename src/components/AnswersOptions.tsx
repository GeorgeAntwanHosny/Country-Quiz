import { useCountryQuestionsContext } from "../context/CountryQuestionsProvider";
import correctIcon from'../assets/images/Check_round_fill.svg';
import wrongIcon from'../assets/images/Close_round_fill.svg';
const AnswersOptions = () => {
    const {currentSelectedQuestion,handleAnswerSelect} = useCountryQuestionsContext();
    const defulatAnswer:string = "relative cursor-pointer rounded-lg bg-color_4 text-color_3 w-60 h-16  max-sm:w-36 text-center  hover:from-color_1_grident hover:to-color_2_grident hover:bg-gradient-to-r disabled:cursor-not-allowed";
    const selectedAnswer:string = "relative cursor-pointer rounded-lg text-color_3 w-60 h-16  max-sm:w-36 text-center  from-color_1_grident to-color_2_grident bg-gradient-to-r disabled:cursor-not-allowed";

    return (
        <div  className="relative grid grid-cols-[240px_240px] max-sm:grid-cols-[140px_140px] max-sm:gap-8 grid-rows-[50px_50px] justify-center align-middle gap-10">
            {currentSelectedQuestion.answers_options.map(answer_option=>{
                return (
                    <button  disabled={currentSelectedQuestion.user_answer!==""} key={answer_option} className={answer_option ===currentSelectedQuestion.user_answer? selectedAnswer:defulatAnswer}>
               <p onClick={()=>handleAnswerSelect(currentSelectedQuestion.id,answer_option)}
               >{answer_option}</p>

              {currentSelectedQuestion.user_answer !=="" && currentSelectedQuestion.user_answer ===answer_option && <>
                <img src={correctIcon} alt="correct-icon" className={`${currentSelectedQuestion.user_answer  === currentSelectedQuestion.answer?'':'hidden' } absolute top-2 right-2 `}/>
                <img src={wrongIcon} alt="wrong-icon"   className={`${currentSelectedQuestion.user_answer  === currentSelectedQuestion.answer?'hidden':'' } absolute top-2 right-2`}/>
              </>}

              {currentSelectedQuestion.user_answer !=="" && currentSelectedQuestion.answer ===answer_option && <>
                <img src={correctIcon} alt="correct-icon" className={`absolute top-2 right-2 `}/>
              </>}
            </button>
                );
            })}
           
        </div>
    );
}

export default AnswersOptions;
