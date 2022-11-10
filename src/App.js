import React from 'react';
import Coins from './Components/Coins';
import style from './Styles/style.module.css';
import './Styles/Font.css'


const App = () => {
    return (
        <div className={style.wrapper}>
            <Coins />
        </div>
    );
};

export default App;