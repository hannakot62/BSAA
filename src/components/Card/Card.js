import Info from "../Info/Info";
import MainTable from "../MainTable/MainTable";
import style from './Card.module.css'
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchTeachers} from "../../store/slices/teachersSlice";

export default  function Card(){
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(fetchTeachers())},[])
    const teachers = useSelector(state=>state.teachers.teachers)
    console.log(teachers)
    return (
        <div className={style.container}>
            <header>
                kjkj
            </header>
            <Info/>
            <MainTable/>
        </div>
    )
}