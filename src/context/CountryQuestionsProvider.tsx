import  { createContext, ReactNode, useContext, useState } from 'react';
import { QuestionAnswer } from '../model/QuestionAnswer';

interface CountryQuestionsContextProps{
    questionAnswers:QuestionAnswer[];
    currentSelectedQuestion:QuestionAnswer;
    result:number;
    handleAnswerSelect: (questionNumber: number, answer: string) => void;
    handleQuestionSelect: (questionNumber: number) => void;
    handelPlayAgain:()=>void;
    number_of_answered:number;
}

const CountryQuestionsContext =createContext<CountryQuestionsContextProps|undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useCountryQuestionsContext = ()=>{
    const context = useContext(CountryQuestionsContext);
    if (!context) {
        throw new Error('useCountryQuestionsContext must be used within a WorldRankProvider');
    }
    return context;
}
const countryQuestions:QuestionAnswer[] = [
    {   
        id:1,
        question: "Which country is Kuala Lumpur the capital?",
        answers_options: ['Sweden', 'Vietnam','Malaysia','Austria'],
        answer: "Malaysia",
        user_answer:"",

    },
    {
        id:2,
        question: "Which country has the largest population?",
        answers_options: ["India", "USA", "China", "Indonesia"],
        answer: "China",
        user_answer:"",
    },
    {
        id:3,
        question: "What is the capital of Japan?",
        answers_options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        answer: "Tokyo",
        user_answer:"",
    },
    {
        id:4,
        question: "Which country is known as the Land of the Rising Sun?",
        answers_options: ["China", "Japan", "South Korea", "Thailand"],
        answer: "Japan",
        user_answer:"",
    },
    {
        id:5,
        question: "What is the capital of Australia?",
        answers_options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        answer: "Canberra",
        user_answer:"",
    },
    {
        id:6,
        question: "Which country is famous for the Eiffel Tower?",
        answers_options: ["Germany", "France", "Italy", "Spain"],
        answer: "France",
        user_answer:"",
    },
    {
        id:7,
        question: "What is the largest country in the world by area?",
        answers_options: ["USA", "Canada", "Russia", "China"],
        answer: "Russia",
        user_answer:"",
    },
    {
        id:8,
        question: "Which country is home to the kangaroo?",
        answers_options: ["New Zealand", "Australia", "South Africa", "India"],
        answer: "Australia",
        user_answer:"",
    },
    {
        id:9,
        question: "What is the capital of Canada?",
        answers_options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: "Ottawa",
        user_answer:"",
    },
    {
        id:10,
        question: "Which country is known for the pyramids?",
        answers_options: ["Greece", "Mexico", "Egypt", "Peru"],
        answer: "Egypt",
        user_answer:"",
    }
];

const CountryQuestionsProvider :React.FC<{children:ReactNode}> = ({children}) => {
    const [countryQuestionsContextState, setCountryQuestionsContext] = useState({
        questionAnswers: countryQuestions,
        currentSelectedQuestion: countryQuestions[0],
        result: 0,
        number_of_answered:0,
    });
   const handleAnswerSelect= (questionNumber: number, answer: string)=>{
    const updatedQuestionAnswers = [...countryQuestionsContextState.questionAnswers];
    const currentQuestion = updatedQuestionAnswers.find((question: QuestionAnswer) => question.id === questionNumber);
    if (currentQuestion && currentQuestion.answer === answer) {
        setCountryQuestionsContext(prevState=>({
           ...prevState,
           questionAnswers:[...prevState.questionAnswers].map((question: QuestionAnswer)=>{
            if( question.id === questionNumber){
                return{...question,user_answer:answer}
            }
            return question;
           }),
            result: countryQuestionsContextState.result + 1,
            number_of_answered: countryQuestionsContextState.number_of_answered+1,
            currentSelectedQuestion:{...prevState.currentSelectedQuestion, user_answer:answer}
        }));
    } 
    else {
        setCountryQuestionsContext(prevState=>({
            ...prevState,
            questionAnswers:[...prevState.questionAnswers].map((question: QuestionAnswer)=>{
             if( question.id === questionNumber){
                 return{...question,user_answer:answer}
             }
             return question;
            }),
            number_of_answered: countryQuestionsContextState.number_of_answered+1,
            currentSelectedQuestion:{...prevState.currentSelectedQuestion, user_answer:answer}
         }));
    }
   }
   const handleQuestionSelect =(questionNumber: number)=>{
    const QuestionAnswers = [...countryQuestionsContextState.questionAnswers];
    const taergetQuestion = QuestionAnswers.find((question: QuestionAnswer) => question.id === questionNumber);
    if(taergetQuestion){
        setCountryQuestionsContext({
            ...countryQuestionsContextState,
            currentSelectedQuestion: taergetQuestion,
         });
    }
   }
   const handelPlayAgain = ()=>{
    setCountryQuestionsContext((prevState)=>({
        ...prevState,
        questionAnswers: [...prevState.questionAnswers].map(questionAnswer=>({...questionAnswer,user_answer:""})),
        currentSelectedQuestion:{...prevState.questionAnswers[0],user_answer:""},
        result: 0,
        number_of_answered:0,
     }));
   }
    return (
        <CountryQuestionsContext.Provider value={{...countryQuestionsContextState,handleAnswerSelect,handleQuestionSelect,handelPlayAgain}}>
            {children}
        </CountryQuestionsContext.Provider>
    );
}

export default CountryQuestionsProvider;
