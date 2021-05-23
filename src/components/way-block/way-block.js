import React from 'react';
import style from "../../assets/style/scss/way-block/way-block.module.css";
import {NavLink} from "react-router-dom";

const WayBlock = (props) => {

    let item = props.data.map(i =>
            <div className={style.main__block__item}>
                <p><NavLink to={`${i.url}`}>&nbsp;{i.name}</NavLink></p>
                <div className={style.arrow}>
                    <div className={style.arrow__item}></div>
                    <div className={style.arrow__item}></div>
                </div>
            </div>

        )

// <div className={style.main__block}></div>
    return (
        <div>
            {/*Початок стрілки*/}
            <div className={style.main__block}>
                {/*<div className={style.main__block__item}>*/}
                {/*    <p><NavLink to={'/home'}>Головна</NavLink></p>*/}
                {/*    <div className={style.arrow}>*/}
                {/*        <div className={style.arrow__item}></div>*/}
                {/*        <div className={style.arrow__item}></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={style.main__block__item}>*/}

                {/*    <p><NavLink to={'/rules'}>Правила</NavLink></p>*/}
                {/*    <div className={style.arrow}>*/}
                {/*        <div className={style.arrow__item}></div>*/}
                {/*        <div className={style.arrow__item}></div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {item}
            </div>
            {/*Кінець стрілки*/}
        </div>
    );
};

export default WayBlock;