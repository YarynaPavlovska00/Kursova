import React from 'react';

import style from '../../assets/style/scss/footer/footer.module.css'

const Footer = () => {
    return (
        <div className={style.main}>
            <div className={style.main__block}>
                <div className={style.main__block__contacts}>
                    <p>КОНТАКТИ</p>
                    <ul>
                        <li>(068)463-24-36</li>
                        <li>(068)463-24-38</li>
                        <li>м. Львів</li>
                        <li>9.00 - 18.00</li>
                    </ul>
                </div>
                <div className={style.main__bottom}>
                    <div className={style.main__bottom__item}>
                        <p>ПРО НАС</p>
                        <p>Інтернет-магазин для продажу автотоварів, електронних компонентів та
                            модулів для автомобілів різних цінових категорій.</p>
                    </div>
                    <div className={style.main__bottom__item}>
                        <p>ДОДАТКОВО</p>
                        <ul>
                            <li>Виробник</li>
                            <li>Карта сайту</li>
                            <li>Акції</li>
                        </ul>
                    </div>
                    <div className={style.main__bottom__item}>
                        <p>ОСОБИСТИЙ КАБІНЕТ</p>
                        <ul>
                            <li>Особистий кабінет</li>
                            <li>Історія замовлень</li>
                            <li>Закладки</li>
                            <li>Розсилка</li>
                        </ul>
                    </div>

                </div>
                <div className={style.main__copyright}>
                    <p>Copyright © 2021 Yaryna Pavlovska. Всі права захищено.</p>
                </div>
                <div>
                </div>
            </div>

        </div>
    );
};

export default Footer;
