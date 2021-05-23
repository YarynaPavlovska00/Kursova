import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

//Components
import Header from "../header/header";
import Homepage from "../homepage/homepage";
import Catalog from "../catalog/catalog";
import Bmw from "../bmw/bmw";
import BmwInfoPage from "../bmw/bmw-info-page/bmw-info-page";
import Busket from "../basket/busket";
import Volvo from "../volvo/volvo";
import VolvoInfoPage from "../volvo/volvo-info-page/volvo-info-page";
import Mercedes from "../mercedes/mercedes";
import MercedesInfoPage from "../mercedes/mercedes-info-page/mercedes-info-page";
import Ford from "../ford/ford";
import FordInfoPage from "../ford/ford-info-page/ford-info-page";
import Volkswagen from "../volkswagen/volkswagen";
import VolkswagenInfoPage from "../volkswagen/volkswagen-info-page/volkswagen-info-page";
import Footer from "../footer/footer";
import Rules from "../rules/rules";
import Dostavka from "../dostavka/dostavka";
import Vidgyky from "../vidguky/vidgyky";
import Contacts from "../contacts/contacts";

const App = () => {

    const [bmwID, setBmwID] = useState(0)

    const data_bmw   = require('../../data/bmw.json')
    const data_volvo  = require('../../data/volvo.json')
    const data_mers  = require('../../data/mercedes.json')
    const data_ford  = require('../../data/ford.json')
    const data_volk = require('../../data/volkswagen.json')


    const [arr,setArr] = useState([])

    const [state, setState] = useState(data_bmw);
    const [stateVolvo, setStateVolvo] = useState(data_volvo);
    const [stateMers, setStateMers] = useState(data_mers);
    const [stateFord, setStateFord] = useState(data_ford);
    const [stateVolk, setStateVolk] = useState(data_volk);

//BMW
    const deleteItem = (id) => {
        setState(() => {
            const idx = state.findIndex(el => +el.id === id);

            const newArr = [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)
            ]

            return newArr

        })
    }

    const editedAuto = localStorage.getItem('editAuto');

    const editItem = (id) => {
        setState(() => {
            const idx = state.findIndex(el => +el.id === id);

            console.log(id, 'id id')
            console.log(idx, 'idx idx')

            state.splice(id, 1, JSON.parse(editedAuto))
            console.log(state, 'STATE')
            const newArr = [...state]
            return newArr
        })
    }

    const newItem = (newAuto) => {
        setState(() => {
            const newArr = [...state, newAuto]
            return newArr
        })
    }

//VOLVO

    const deleteItemVolvo = (id) => {
        setStateVolvo(() => {
            const idx = stateVolvo.findIndex(el => +el.id === id);

            const newArr = [
                ...stateVolvo.slice(0, idx),
                ...stateVolvo.slice(idx + 1)
            ]

            return newArr

        })
    }


    const editItemVolvo = (id) => {
        setStateVolvo(() => {
            const idx = stateVolvo.findIndex(el => +el.id === id);

            console.log(id, 'id id')
            console.log(idx, 'idx idx')

            stateVolvo.splice(id, 1, JSON.parse(editedAuto))

            const newArr = [...stateVolvo]
            return newArr
        })
    }

    const newItemVolvo = (newAuto) => {
        setStateVolvo(() => {
            const newArr = [...stateVolvo, newAuto]
            return newArr
        })
    }


//MERS

    const deleteItemMers = (id) => {
        setStateMers(() => {
            const idx = stateMers.findIndex(el => +el.id === id);

            const newArr = [
                ...stateMers.slice(0, idx),
                ...stateMers.slice(idx + 1)
            ]

            return newArr

        })
    }

    // const editedAuto = localStorage.getItem('editAuto');

    const editItemMers = (id) => {
        setStateMers(() => {
            const idx = stateMers.findIndex(el => +el.id === id);

            console.log(id, 'id id')
            console.log(idx, 'idx idx')

            stateMers.splice(id, 1, JSON.parse(editedAuto))

            const newArr = [...stateMers]
            return newArr
        })
    }

    const newItemMers = (newAuto) => {
        setStateMers(() => {
            const newArr = [...stateMers, newAuto]
            return newArr
        })
    }

//FORD

    const deleteItemFord = (id) => {
        setStateFord(() => {
            const idx = stateFord.findIndex(el => +el.id === id);

            const newArr = [
                ...stateFord.slice(0, idx),
                ...stateFord.slice(idx + 1)
            ]

            return newArr

        })
    }

    // const editedAuto = localStorage.getItem('editAuto');

    const editItemFord = (id) => {
        setStateFord(() => {
            const idx = stateFord.findIndex(el => +el.id === id);

            console.log(id, 'id id')
            console.log(idx, 'idx idx')

            stateFord.splice(id, 1, JSON.parse(editedAuto))

            const newArr = [...stateFord]
            return newArr
        })
    }

    const newItemFord = (newAuto) => {
        setStateFord(() => {
            const newArr = [...stateFord, newAuto]
            return newArr
        })
    }


//VOLKSWAGEN

    const deleteItemVolk = (id) => {
        setStateVolk(() => {
            const idx = stateVolk.findIndex(el => +el.id === id);

            const newArr = [
                ...stateVolk.slice(0, idx),
                ...stateVolk.slice(idx + 1)
            ]

            return newArr

        })
    }


    const editItemVolk = (id) => {
        setStateVolk(() => {
            const idx = stateVolk.findIndex(el => +el.id === id);

            console.log(id, 'id id')
            console.log(idx, 'idx idx')

            stateVolk.splice(id, 1, JSON.parse(editedAuto))

            const newArr = [...stateVolk]
            return newArr
        })
    }

    const newItemVolk = (newAuto) => {
        setStateVolk(() => {
            const newArr = [...stateVolk, newAuto]
            return newArr
        })
    }
    return (

        <div>
            <BrowserRouter>
                <Header data={arr}/>
                <Route path='/' exact render={() => <Homepage/>}/>
                <Route path='/home' render={() => <Homepage/>}/>
                <Route path='/basket' render={() => <Busket data={arr}/>}/>
                <Route path='/catalog' exact render={() => <Catalog/>}/>
                <Route path='/rules' exact render={() => <Rules/>}/>
                <Route path='/contacts' exact render={() => <Contacts/>}/>
                <Route path='/delivery' exact render={() => <Dostavka/>}/>
                <Route path='/responds' exact render={() => <Vidgyky/>}/>

                <Route path='/catalog/bmw'  exact render={() => <Bmw setBmwID={setBmwID}
                                                                           deleteItem={deleteItem}
                                                                           editItem={editItem}
                                                                           newItem={newItem}
                                                                           data={state}

                />}/>
                <Route path='/catalog/bmw/:id' render={() => <BmwInfoPage data={data_bmw[bmwID]}
                                                                               arr={arr}
                                                                               setArr={setArr}
                />}/>

                <Route path='/catalog/volvo'  exact render={() => <Volvo setBmwID={setBmwID}
                                                                                deleteItemVolvo={deleteItemVolvo}
                                                                                editItemVolvo={editItemVolvo}
                                                                                newItemVolvo={newItemVolvo}
                                                                                data={stateVolvo}

                />}/>
                <Route path='/catalog/volvo/:id' render={() => <VolvoInfoPage data={data_volvo[bmwID]}
                                                                                     arr={arr}
                                                                                     setArr={setArr}
                />}  />

                <Route path='/catalog/mers'  exact render={() => <Mercedes setBmwID={setBmwID}
                                                                              deleteItemMers={deleteItemMers}
                                                                              editItemMers={editItemMers}
                                                                              newItemMers={newItemMers}
                                                                              data={stateMers}

                />}/>
                <Route path='/catalog/mers/:id' render={() => <MercedesInfoPage  data={data_mers[bmwID]}
                                                                                    arr={arr}
                                                                                    setArr={setArr}
                />}  />

                <Route path='/catalog/ford'  exact render={() => <Ford setBmwID={setBmwID}
                                                                       deleteItemFord={deleteItemFord}
                                                                       editItemFord={editItemFord}
                                                                       newItemFord={newItemFord}
                                                                       data={stateFord}

                />}/>
                <Route path='/catalog/ford/:id' render={() => <FordInfoPage  data={data_ford[bmwID]}
                                                                             arr={arr}
                                                                             setArr={setArr}
                />}  />

                <Route path='/catalog/volk'  exact render={() => <Volkswagen setBmwID={setBmwID}
                                                                         deleteItemVolk={deleteItemVolk}
                                                                         editItemVolk={editItemVolk}
                                                                         newItemVolk={newItemVolk}
                                                                         data={stateVolk}

                />}/>
                <Route path='/catalog/volk/:id' render={() => <VolkswagenInfoPage  data={data_volk[bmwID]}
                                                                              arr={arr}
                                                                              setArr={setArr}
                />}  />

            </BrowserRouter>
            <Footer/>

        </div>
    )
}

export default App
