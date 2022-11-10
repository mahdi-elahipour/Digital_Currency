import React, { useState, useEffect } from "react";
import { coinsApi } from "../Services/CoinsApi";
import style from '../Styles/style.module.css'
import Coin from "./Coin";
import loading from '../Images/gears-800p.gif';


const Coins = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        const getCoins = async () => {
            setCoins(await coinsApi())
        }
        getCoins();
    }, [])
    const changeHandler = e => {
        setSearch(e.target.value);
    }

    const newCoinsList = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (

        <div className={style.coins}>

            {coins.length ?
                <>
                    <div className={style.searchBox}><input type='text' value={search} placeholder='Search' onChange={changeHandler} /> </div>
                    {newCoinsList.map(coin => <Coin key={coin.id}
                        id={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                        marketCap={coin.market_cap}
                    />)}
                </>
                : <div className={style.loadingImageWrapper}><img width='200px' src={loading} alt='loading' /></div>
            }
        </div>

    );
};

export default Coins;