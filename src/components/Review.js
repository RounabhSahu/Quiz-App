import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {collection,getDoc, getDocs ,query,orderBy,addDoc ,setDoc,doc} from 'firebase/firestore';
import {db} from "../Firebase";
const Review = () => {
    const [saved, setSaved] = React.useState(false);
    const [data, setData] = React.useState([]);
    const quizRef= collection(db, 'Quiz_data');
    let navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('Question_data')===undefined){
            navigate("/Home")
        }
        else{
            setData(JSON.parse(localStorage.getItem('Question_data')))
        }
    },[])
    const handleSave=async ()=>{

    }

    return (
        <div>
            <span>Topic : {localStorage.getItem('Quiz_topic')}</span>
            {data.map((item, index) => {
                return (
                    <div key={'ques-div'+index.toString()}>
                        Q{index+1}. {item.value}
                        <div key={'ans-div'+index.toString()}>
                            {item.choices.map((choice, index2) => {
                                return (<span key={'span'+index.toString()+index2.toString()}>{index2+1}. {choice}</span>)
                            })}
                            {item.correctAnswer}
                        </div>

                    </div>
                )
            })}
            <button onClick={()=>navigate('/Maker')} disabled={saved}>Back to Change</button>
            <button onClick={()=>{handleSave()}} disabled={handleSave()}> Save Quiz</button>
        </div>
    );
};

export default Review;
