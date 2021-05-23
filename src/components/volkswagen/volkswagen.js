import React, {useState} from 'react';
import style from "../../assets/style/scss/bmw/bmw.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import VolkswagenItem from "./volkswagen-item/volkswagen-item";
import NewAutoModal from "../bmw/bmw-item/newAutoModal";

const Volkswagen = (props) => {
    const data = require('../../data/volkswagen.json')


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


    let item = props.data.map(i => <VolkswagenItem setBmwID={props.setBmwID}
                                              data={i}
                                              infoData={data}
                                              deleteItemVolk={props.deleteItemVolk}
                                              editItemVolk={props.editItemVolk}
                                              newItemVolk={props.newItemVolk}
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
            <NewAutoModal onClose={onCloseNew} open={isNewModal} data={props.data} newItem={props.newItemVolk}/>
        </div>
    )
};

export default Volkswagen;
