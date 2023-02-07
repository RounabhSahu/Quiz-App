import React from 'react';
import {auth,provider} from "../Firebase";
import {signInWithPopup} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {collection, getDocs ,query,orderBy} from 'firebase/firestore';
import {db} from "../Firebase";

const Login = () => {
    const quizRef= collection(db, 'Quiz_data');
    const navigate = useNavigate();
    const [newUser, setNewUser] = React.useState(false)
    const signInWithGoogle =async () => {
        const data = await getDocs(quizRef);
        signInWithPopup(auth, provider).then((result) => {
            console.log(auth);
            console.log(result)
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("name", result.user.displayName);
            localStorage.setItem("email", result.user.email);
            localStorage.setItem("profile", result.user.photoURL);
            localStorage.setItem("uid", result.user.uid);
            localStorage.setItem("newUser", false);

            const users=data.docs.map(doc => doc.id);
            if( !users.includes(result.user.uid)) {
                setNewUser(true)
                localStorage.setItem("newUser", true);
            }
            const timer = setTimeout(()=>{

                navigate("/Home")
            },1000)
        }).catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div className="bg-amber-200 w-fit mx-auto my-40 p-6 rounded border-slate-500 border-x-2 text-center">
            <h3 className="text-3xl py-2">Welcome</h3>
            <p className="text-xl py-2">Sign in to Continue to this simple blogspot</p>
            <button onClick={signInWithGoogle} className="text-xl py-2 bg-sky-200 px-4 py-2 rounded border-slate-700 border-2 hover:bg-slate-300 hover:scale-110">Sign In With Google</button>
            {newUser && <p className="text-xl py-2 text-violet-500">New user</p>}
        </div>
    );
};

export default Login;
