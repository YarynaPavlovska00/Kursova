import React, {useState} from 'react';
import style from "../../assets/style/scss/bmw/bmw.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import NewAutoModal from "./bmw-item/newAutoModal";
import BmwItem from "./bmw-item/bmw-item";

const Bmw = (props) => {

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

    const data = require('../../data/bmw.json')
    console.log(props.deleteItem, 'gggggggggggg')
    console.log(props.data, 'props data datat datat')
    console.log(props.editItem, 'edit Item edit')
    let item = props.data.map(i => <BmwItem setBmwID={props.setBmwID}
                                                  data={i}
                                                  infoData={data}
                                                  deleteItem={props.deleteItem}
                                                  editItem={props.editItem}
                                                  newItem={props.newItem}
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
    );
}

export default Bmw;
