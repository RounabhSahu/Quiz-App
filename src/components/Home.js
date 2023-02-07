import React, {useEffect} from 'react';
import {data} from './data';
import {Link} from 'react-router-dom'
import {collection,getDoc, getDocs ,query,orderBy ,setDoc,doc} from 'firebase/firestore';
import {db} from "../Firebase";
import Quiz from './Quiz';
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
    const quizRef= collection(db, 'Quiz_data');
    const getData= async ()=>{

        // const data = await getDocs(quizRef)
        if(localStorage.getItem('newUser')===true.toString()) {
            console.log('working')
                await setDoc(doc(db,'Quiz_data',localStorage.getItem('uid')),{});
            localStorage.setItem('newUser',false);
        }
        const userRef= doc(db,'Quiz_data',localStorage.getItem('uid'));
        const userData = await getDoc(userRef);
        console.log(userData.data());
        if(JSON.stringify(userData.data())==='{}') {
            setNoData(true);
        }

        // const users=data.docs.map(doc=>doc.id);
        // console.log(data.docs.map(doc=>doc.id));

    }
    return (
        <div className="text-center flex flex-col space-y-1">
            {/*{localStorage.getItem('loaded') === 'true'? <Quiz/>:null}*/}
            <button onClick={getData} className="px-4 py-2 border border-slate-700 bg-blue-300 w-fit mx-auto">Get quizzes that you made</button>
            <Link to='/Maker' className="px-4 py-2 border border-slate-700 bg-blue-300 w-fit mx-auto">Maker</Link>
            <Link to='/Taker' className="px-4 py-2 border border-slate-700 bg-blue-300 w-fit mx-auto">Taker</Link>
            {noData && <p className="px-4 py-2 bg-amber-300 rounded w-fit mx-auto">You have not made any quiz</p>}
        </div>
    );
};

export default Home;
