import React from 'react';
import style from '../Styles/style.module.css'

const Coin = ({ id, image, name, priceChange, symbol, marketCap, price }) => {
    return (
        <div className={style.coin}>
            <img id={style.logo} src={image} alt={name} />
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>${price}</span>
            <span className={priceChange < 0 ? style.decColor : style.incColor}>{priceChange.toFixed(2)}</span>
            <span>${marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;