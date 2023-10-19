import Info from "../Info/Info";
import MainTable from "../MainTable/MainTable";
import style from './Card.module.css'
import React from "react";

export default  function Card(props) {
    const subject = props.subject;
    console.log(subject)
    return (
        <div className={style.container}>
            <header className={style.header}>
                {subject.subjectName}
            </header>
            <Info subject={subject}/>
            <MainTable subject={subject}/>
        </div>
    )
}