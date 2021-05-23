import React, {useState} from 'react';
import VolvoItem from "../volvo/volvo-item/volvo-item";
import style from "../../assets/style/scss/bmw/bmw.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import MercedesItem from "./mercedes-item/mercedes-item";
import BmwItem from "../bmw/bmw-item/bmw-item";

const Mercedes = (props) => {
    const data = require('../../data/mercedes.json')


    const [isNewModal, setNewModal] = useState(false);

    const adminValue = localStorage.getItem('admin');

    const admin = {
        key: +adminValue,
    }

    const onOpenNew = () => {
        setNewModal(true)
    }

    const onCloseNew = () => {
        setNewModal(false)
    }

    console.log(props.deleteItem, 'gggggggggggg')
    console.log(props.data, 'props data datat datat')
    console.log(props.editItem, 'edit Item edit')


    let item = props.data.map(i => <MercedesItem setBmwID={props.setBmwID}
                                               data={i}
                                               infoDataMers={data}
                                               deleteItemMers={props.deleteItemMers}
                                               editItemMers={props.editItemMers}
                                               newItemMers={props.newItemMers}
    />)
    return (
        <div className={style.main}>
            <div className={style.main__leftbar}>
                <CategoryBar/>
            </div>
            <div className={style.main__content}>
                {item}
            </div>
        </div>
    )
};

export default Mercedes;
