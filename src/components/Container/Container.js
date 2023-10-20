import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchTeachers} from "../../store/slices/teachersSlice";
import {fetchSubjects} from "../../store/slices/subjectsSlice";
import Card from "../Card/Card";

export default function Container() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTeachers());
        dispatch(fetchSubjects())
    }, [])

    const subjects = useSelector(state => state.subjects.subjects)
    const cards = subjects.map(subject => <Card subject={subject} key={subject.uniqueId}/>)
    return (<div>{cards}</div>)
}