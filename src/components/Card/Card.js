import Info from "../Info/Info";
import MainTable from "../MainTable/MainTable";
import style from './Card.module.css'
import React from "react";
import Book from "../svgs/Book";

export default  function Card(props) {
    const subject = props.subject;
    console.log(subject)
    return (
        <div className={style.container}>
            <header className={style.header}>
                <div className={style.svgContainer}>
                    <Book/>
                </div>
                {subject.subjectName}
            </header>
            <Info subject={subject}/>
            <MainTable subject={subject}/>
        </div>
    )
}