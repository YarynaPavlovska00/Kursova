import React, {useState} from 'react';

import style from '../../assets/style/scss/contacts/contacts.module.css'
import WayBlock from "../way-block/way-block";

import img from '../../assets/images/blackavto.svg'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Mercedes = React.forwardRef(function Mercedes(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Contacts = () => {
    const [open, setOpen] = useState(false);
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Text, setText] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className={style.main}>
            <WayBlock data={[
                {name: "Головна", url: "/home"},
                {name: "Зворотній зв'язок", url: "/contacts"}
            ]}/>
            <div className={style.main__gen}>
                <h3>Зворотній зв`язок</h3>
                <br/>
                <p><b>МИ ЗНАХОДИМОСЬ ЗА АДРЕСОЮ:</b></p>
            </div>

            <div className={style.main__gen__block}>
                <div>
                    <img src={img}/>
                </div>
                <div>
                    <h6>Інтернет-магазин BlackAvto</h6>
                    <p>м. Львів </p>
                </div>
                <div className={style.phone}>
                    <div>
                        <b>Телефон</b>
                        <p>(068)-463-24-36</p>
                    </div>
                    <div>
                        <b>Viber</b>
                        <p>(068)-463-24-36</p>
                    </div>
                </div>
                <div className={style.phone}>
                    <div>
                        <b>Режим роботи</b>
                        <p>Пн-Пт з 9:00 до 18:00</p>
                    </div>
                    <div>
                        <b>Додаткова інформація</b>
                        <p>Товар з магазину можна забрати після оформлення замовлення.</p>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Contacts;