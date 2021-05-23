import React from 'react';
import CatalogItem from "./catalog-item/catalog-item";

import style from '../../assets/style/scss/catalog/catalog.module.css'
import CategoryBar from "../homepage/category-bar/category-bar";

const Catalog = () => {

    const data = require('../../data/catalog-data.json')

    let items = data.map(item => <CatalogItem title={item.title} desc={item.desc} photo={item.photo} url={item.url}/>)

    return (
        <div className={style.main}>
            <div className={style.main__leftbar}>
                <CategoryBar/>

            </div>
            <div className={style.main__content}>

                {items}
            </div>
        </div>
    );
};

export default Catalog;