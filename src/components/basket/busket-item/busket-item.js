import React from 'react';

import style from '../../../assets/style/scss/busket/busket-item/busket-item.module.css'


const BusketItem = (props) => {
    return (
        <div className={style.main}>
            <div className={style.main__navbar}>
                <div className={style.main__first}>
                    <img src={props.data.img}/>
                </div>
                <div className={style.main__second}><p>{props.data.name}</p></div>
                <div className={style.main__third}><p>{props.data.count_item}</p></div>
                <div className={style.main__four}><p>{props.data.price}</p></div>
                <div className={style.main__five}><p>{props.data.all_price}</p></div>
            </div>
        </div>
    );
};

export default BusketItem;