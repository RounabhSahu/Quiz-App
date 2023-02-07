import React from 'react';
import Home from './components/Home';
import Maker from './components/Maker';
import Login from './components/Login';
import Result from './components/Result';
import Taker from './components/Taker';
import Review from "./components/Review";
import Quiz from "./components/Quiz";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


const App = () => {
    return (
        <Router >
            {/*<div>*/}
            {/*    <Link to='/'>Home</Link>*/}
            {/*    <Link to='/login'>Login</Link>*/}
            {/*    <Link to='/maker'>Maker</Link>*/}
            {/*</div>*/}
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Maker' element={<Maker/>}/>
                <Route path='/Taker' element={<Taker/>}></Route>
                <Route path='/' element={<Login/>}/>
                <Route path='/Result' element={<Result/>}/>
                <Route path='/Review' element={<Review/>}/>
                <Route path='/Quiz' element={<Quiz/>}/>
            </Routes>
        </Router>


    );
};

export default App;
