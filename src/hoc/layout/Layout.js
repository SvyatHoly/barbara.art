import React from 'react';
import NavBar from "../../components/navigation/NavBar";
import Aux from "../aux/Aux";
import Header from "../../components/header/Header";

export default function layout(props) {
    return (
        <Aux>
            <NavBar/>
            {props.children}
        </Aux>
    )

}