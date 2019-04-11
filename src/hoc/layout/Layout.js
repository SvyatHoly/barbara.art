import React from 'react';
import NavBar from "../../components/navigation/NavBar";
import Aux from "../aux/Aux";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";

export default function layout(props) {
    return (
        <Aux>
            <Header/>
            <NavBar/>
            <Body/>
        </Aux>
    )

}