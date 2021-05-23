import React, {useState} from 'react';
import style from "../../../assets/style/scss/bmw/bmw-item/bmw-item.module.css";
import {Button, Card} from "react-bootstrap";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'

import data from '../../../data/bmw.json';

import EditAutoModal from "./editAutoModal";
import NewAutoModal from "./newAutoModal";

const adminValue = localStorage.getItem('admin');

const admin = {
    key: +adminValue,
}

const BmwItem = (props) => {

    let arrData = props.infoData
    // console.log(props.infoData, 'arrrr')
    const [visible, setVisible] = useState(false);

    const [isEditModal, setEditModal] = useState(false);

    const onOpen = () => {
        setEditModal(true)
    }

    const onClose = () => {
        setEditModal(false)
    }

    const [state, setState] = useState(props.infoData)
    console.log(props.data.id, 'props id id id id id id id id id')

    return (
        <div>
            <div className={style.main}>
                <Card style={{width: '16rem', height: "420px"}}>
                    <NavLink to={`/catalog/bmw/${props.data.id}`}><Card.Img variant="top"
                              src={props.data.url}
                              style={{width: '100%', height: "170px"}}
                              onClick={() => {
                                  setVisible(!visible)
                                  props.setBmwID(props.data.id)
                              }}
                    /></NavLink>
                    <Card.Body>
                        <Card.Title>{props.data.model}</Card.Title>
                        <Card.Text>
                            Розмір: {props.data.size} см
                        </Card.Text>
                        <Card.Text>
                            Рік: {props.data.date}
                        </Card.Text>
                        <Card.Text>
                            <span
                                className={style.price}><p>Ціна:  </p> <span><h5>{props.data.price} грн</h5></span></span>
                        </Card.Text>
                        {admin.key === 0 && <NavLink to={`/catalog/bmw/${props.data.id}`}><Button variant="danger"
                                                                                                        className={style.btn}
                                                                                                        onClick={() => {
                                                                                                            setVisible(!visible)
                                                                                                            props.setBmwID(props.data.id)
                                                                                                        }}

                        >
                            Купити <ShoppingCartIcon fontSize={'small'}/>
                        </Button>
                        </NavLink>}
                        {admin.key === 1 &&
                        <div
                            className={'btn btn-primary'}
                            onClick={() => props.deleteItem(+props.data.id)}
                        >
                            <FontAwesomeIcon
                                icon={faTrash}
                            />
                        </div>
                        }
                        {admin.key === 1 &&
                        <div
                            className={'btn btn-primary ml-2'}
                            onClick={
                                onOpen
                            }
                        >
                            <FontAwesomeIcon
                                icon={faEdit}
                            />
                        </div>
                        }
                    </Card.Body>
                </Card>
                {/*Edit*/}
                <EditAutoModal open={isEditModal} onClose={onClose} editItem={props.editItem} data={props.data}/>

            </div>

        </div>
    );
};

export default BmwItem;
