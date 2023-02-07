import React, {useEffect} from 'react';
import {data} from './data';
import {useNavigate} from 'react-router-dom'
import {collection,getDoc, getDocs ,query,orderBy ,setDoc,doc,} from 'firebase/firestore';
import {db} from "../Firebase";
import Quiz from './Quiz';
import login from "./Login";

const Home = () => {
    // useEffect(() => {
    //     localStorage.setItem('title', JSON.stringify(data.topic));
    //     localStorage.setItem('level', JSON.stringify(data.level));
    //     localStorage.setItem('questions', JSON.stringify(data.questions));
    //     localStorage.setItem('value',JSON.stringify(data.perQuestionScore));
    //     localStorage.setItem('loaded',true);
    //
    // },[])
    const [noData, setNoData] = React.useState(false);
    const navigate = useNavigate();
    const quizRef= collection(db,localStorage.getItem('uid'));
    const getData= async ()=>{
        const docs=await getDocs(quizRef);
        const userDocs=docs.docs.map(doc=>{
            return{id:doc.id,data:doc.data()}
        });
        console.log(userDocs)
        if(userDocs.length===1){
            setNoData(true)
        }
        // const data = await getDocs(quizRef)
        // if(localStorage.getItem('newUser')===true.toString()) {
        //     console.log('working')
        //         await setDoc(doc(db,'Quiz_data',localStorage.getItem('uid')),{});
        //     localStorage.setItem('newUser',false);
        // }

        // await setDoc(doc(db,'test2',localStorage.getItem('uid')),{});
        // const re=await db .collection('test').doc('Hello there').listCollections();
        // const re=await collection(db,'test3')
        // await getDocs(re).then(e=>{
        //     console.log(e.docs.map(d=>d.data()).length,'result')
        // }).catch(e=>{
        //     console.log(e)
        // });
        // const userRef= doc(db,'Quiz_data',localStorage.getItem('uid'));
        // const userData = await getDoc(userRef);
        // console.log(userData.data());
        // if(JSON.stringify(userData.data())==='{}') {
        //     setNoData(true);
        // }

        // const users=data.docs.map(doc=>doc.id);
        // console.log(data.docs.map(doc=>doc.id));
    }
    const maker=()=>{
        //'Question_data'
        //'Quiz_topic'
        if(localStorage.getItem('Quiz_topic')!==null) {
            localStorage.removeItem('Quiz_topic');
        }
        if(localStorage.getItem('Question_data')!==null) {
            localStorage.removeItem('Question_data');
        }
        navigate('/Maker')
    }
    const taker=()=>{
        navigate('/Maker')
    }
    return (
        <div className="text-center flex flex-col space-y-1">
            {/*{localStorage.getItem('loaded') === 'true'? <Quiz/>:null}*/}
            <button onClick={getData} className="px-4 py-2 border border-slate-700 bg-blue-300 w-fit mx-auto">Get quizzes that you made</button>
            <button onClick={()=>maker()} className="px-4 py-2 border border-slate-700 bg-blue-300 w-fit mx-auto">Maker</button>
            <button onClick={()=>taker()} className="px-4 py-2 border border-slate-700 bg-blue-300 w-fit mx-auto">Taker</button>
            {noData && <p className="px-4 py-2 bg-amber-300 rounded w-fit mx-auto">You have not made any quiz</p>}
        </div>
    );
};

export default Home;
