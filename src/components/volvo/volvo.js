import React, {useState} from 'react';
import BmwItem from "../bmw/bmw-item/bmw-item";
import style from "../../assets/style/scss/bmw/bmw.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import VolvoItem from "./volvo-item/volvo-item";
import NewAutoModal from "../bmw/bmw-item/newAutoModal";

const Volvo = (props) => {

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

    const data = require('../../data/volvo.json')

    let item = props.data.map(i => <VolvoItem setBmwID={props.setBmwID}
                                                     data={i}
                                                     infoData={data}
                                                     deleteItemVolvo={props.deleteItemVolvo}
                                                     editItemVolvo={props.editItemVolvo}
                                                     newItemVolvo={props.newItemVolvo}
    />)
    return (
        <div>
            <div className={style.main}>
                <div className={style.main__leftbar}>
                    <CategoryBar/>
                </div>
                <div className={style.main__content}>
                    {item}
                </div>
            </div>
            <div className={'btn btn-primary'}
                 style={{position:"relative", left: "80.7vw", top:"2rem"}}
                 onClick={() => onOpenNew()}
            >
                Створити товар
            </div>
            <NewAutoModal onClose={onCloseNew} open={isNewModal} data={props.data} newItem={props.newItem}/>
        </div>
    )
};

export default Volvo;
