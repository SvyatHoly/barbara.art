import React from 'react';
import NavBar from "../../components/navigation/NavBar";
import Aux from "../aux/Aux";

export default function layout(props) {
    return (
        <Aux>
            <NavBar/>
            {props.children}
        </Aux>
    )

}