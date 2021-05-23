import React from 'react';

import style from '../../../assets/style/scss/catalog/catalog-item/catalog-item.module.css'
import {Button, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const CatalogItem = (props) => {
    return (
        <div className={style.main}>
            <Card style={{ width: '16rem', height: "420px"}}>
                <Card.Img variant="top" src={props.photo} style={{width: '100%', height:"170px"}} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.desc}
                    </Card.Text>
                    <NavLink to={props.url}><Button variant="primary">Детальніше</Button></NavLink>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CatalogItem;