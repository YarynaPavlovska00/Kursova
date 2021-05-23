import React, {useState} from 'react';

import style from '../../assets/style/scss/busket/busket.module.css'
import BusketItem from "./busket-item/busket-item";

const Busket = (props) => {

    let items = props.data.map(i => <BusketItem data={i}/>)
    const sum = props.data.reduce(function (sum, {all_price}){
        return sum + all_price
    },0)
    return (
        <div className={style.main}>
            <h5>Кошик замовлень</h5>
            <div className={style.main__general}>
                <div className={style.main__navbar}>
                    <div className={style.main__first}><p>Зображення</p></div>
                    <div className={style.main__second}><p>Найменування товару</p></div>
                    <div className={style.main__third}><p>Кількість</p></div>
                    <div className={style.main__four}><p>Ціна</p></div>
                    <div className={style.main__five}><p>Усього</p></div>
                </div>
                {items}

                <div className={style.all}>
                    <div className={style.all__item}><p>Разом: </p></div>
                    <div className={style.all__item}><p>{sum} грн.</p></div>
                </div>

                <div className={style.oforml}>ОФОРМИТИ ЗАМОВЛЕННЯ</div>

            </div>
        </div>
    );
};

export default Busket;