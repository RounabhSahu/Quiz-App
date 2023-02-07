import React, {useState} from 'react';
import {collection,getDoc, getDocs ,query,orderBy,addDoc ,setDoc,doc} from 'firebase/firestore';
import {db} from "../Firebase";
import Quiz from "./Quiz";
import {useNavigate} from "react-router-dom";
const Taker = () => {
    const [enable,setEnable] = useState('');
    const [code, setCode] = useState('');
    const [warn, setWarn] = useState(false);
    const navigate = useNavigate();
    const handleCode=(e)=>{
        setCode(e.target.value);
    }

    const getQuiz=async()=>{
        let [uid,title]=code.split('//');
        console.log(uid,title)
        const UserCollection=await collection(db,uid)
        const chk= await getDocs(UserCollection).then(async(result) => {
            if(result.docs.map(d=>d.data()).length===0){
                setWarn(true)
                setEnable(null)
            }
            else if(!result.docs.map(d=>d.data().topic).includes(title)){
                setWarn(true)
                setEnable(null)
            }
            else{
                setWarn(false)
                setEnable(title)
                localStorage.setItem('Questions_data',JSON.stringify(result.docs.map(d=>d.data()).filter(d=>d.topic===title)[0].data))
                localStorage.setItem('Questions_Title',JSON.stringify(result.docs.map(d=>d.data()).filter(d=>d.topic===title)[0].topic))
                const timer=setTimer(()=>{
                    navigate('/Quiz')
                })
            }
            console.log(result.docs.map(d=>d.data()))
        }).catch(e=>{
            console.log(e)})

    }
    return (
        <div>
            Taker Page
            <input type="text" value={code} onChange={handleCode}/>
            <button onClick={getQuiz}>Let's Goooo</button>
            {warn && <p>Wrong Code Entered</p>}
            {enable && <p>Entering Quiz: {enable}</p>}
        </div>
    );
};

export default Taker;
