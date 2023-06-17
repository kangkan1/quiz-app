
// import '../App.css';
import '../css/question.css'
import question_list from "./all_question";
export default function Question(props){
    function CreateComponent(){
        if(question_list.hasOwnProperty('questions')){
            
            return (<p>has</p>);
        }else{
            return (<p>hasn't</p>);
        }
    }
    return (
        <div>
            <h3>{props.q_no}</h3>
            <h3>{question_list.questions[props.q_no].question}</h3>
            <h3>{question_list.author}</h3>
            <CreateComponent />
        </div>
    );
}