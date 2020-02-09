import React, {useEffect} from 'react';

import {connect} from "react-redux";
import ElementNameHeader from "../profile/element-name-header/ElementNameHeader";

const Notes = (props) => {
    return (
        <ElementNameHeader text={'my notes'}>

        </ElementNameHeader>
    )
}

const NotesContainer = (props) => {

    //props.getProfileL()
    useEffect(() => {handleNotes()}, [])

    const handleNotes = () => {

    }
    return <Notes />
}

export default connect("", {}) (NotesContainer)