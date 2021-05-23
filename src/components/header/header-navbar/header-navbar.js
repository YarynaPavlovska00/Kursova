import React from 'react';


import style from '../../../assets/style/scss/header/header-navbar/header-navbar.module.css'
import {NavLink} from "react-router-dom";

const HeaderNavbar = () => {
    return (
        <div className={style.main}>
            <div className={style.main__row_elements}>
                <ul>
                    <NavLink to={'/'} activeClassName={style.act}><li>Головна</li></NavLink>
                    <NavLink to={'/catalog'} activeClassName={style.act}><li>Каталог товарів</li></NavLink>
                    {<NavLink to={'/rules'} activeClassName={style.act}><li>Правила</li></NavLink>}
                    {<NavLink to={'/delivery'} activeClassName={style.act}><li>Доставка та оплата</li></NavLink>}
                    {<NavLink to={'/responds'} activeClassName={style.act}><li>Відгуки</li></NavLink>}
                    {<NavLink to={'/contacts'} activeClassName={style.act}><li>Контакти</li></NavLink>}
        </ul>
</div>

</div>
);
};

export default HeaderNavbar;
