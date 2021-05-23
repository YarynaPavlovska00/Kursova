import React from 'react';

import style from '../../assets/style/scss/rules/rules.module.css'
import {NavLink} from "react-router-dom";
import WayBlock from "../way-block/way-block";

const Rules = () => {
    return (
        <div className={style.main}>
            <WayBlock data={[
                {name: "Головна", url: "/home"},
                {name: "Правила", url: "/rules"}
            ]}/>
            <br/>
            <br/>
            <div>
                <h3>Правила</h3>
                <p>Для отримання повної й точної інформації про товар дивіться технічний опис (Datasheet).</p>
                <p>Фотографії товарів є наочними ілюстраціями, тому можуть відрізнятися від реального вигляду товару, але це не впливає на їх технічні параметри.</p>
                <p>Якщо товар не відповідає опису, ви можете його повернути нам, оплативши вартість зворотної пересилки. Правила дозволяють повернути товар на протязі 14 календарних днів, після отримання його покупцем.</p>
            </div>


        </div>
    );
};

export default Rules;