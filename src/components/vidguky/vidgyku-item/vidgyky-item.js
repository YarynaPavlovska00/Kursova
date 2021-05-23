import React from 'react';

import style from '../../../assets/style/scss/vidgyky/vidgyky-item/vidgyky-item.module.css'
import StarIcon from "@material-ui/icons/Star";


const VidgykyItem = (props) => {
    return (
        <div className={style.main}>
            <div className={style.main__double}>
                <div><b>{props.date.name}</b></div>
                <div>{props.date.data}</div>
            </div>
            <div className={style.resp}>
                <p>{props.date.resp}</p>

            </div>
            <div className={style.bl}>
            <div className={style.stars}>
                <StarIcon fontSize={'small'}/>
                <StarIcon fontSize={'small'}/>
                <StarIcon fontSize={'small'}/>
                <StarIcon fontSize={'small'}/>
                <StarIcon fontSize={'small'}/>
            </div>
            <div className={style.answer}>
                <a>Відповісти</a>
            </div>
            </div>
        </div>
    );
};

export default VidgykyItem;