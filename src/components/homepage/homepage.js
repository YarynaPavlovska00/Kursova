import React from 'react';

import style from '../../assets/style/scss/homepage/homepage.module.css'
import CategoryBar from "./category-bar/category-bar";
import Sliderr from "./main-content/slider/slider";

const Homepage = () => {

    const slider_urls = require('../../data/sliders-image-src.json')

    return (
        <div className={style.main}>
            <div className={style.main__leftbar}>
                <CategoryBar/>
            </div>
            <div className={style.main__content}>
                <p className={style.title}>Акції</p>
                <Sliderr data={slider_urls[0]}/>

            </div>

        </div>
    );
};

export default Homepage;
