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
                <div className={style.svgContainer}>
                <svg fill="#3c4b64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#3c4b64"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2,20V4.963a11,11,0,0,1,9,0V20A11,11,0,0,0,2,20ZM13,4.963V20a11,11,0,0,1,9,0V4.963A11,11,0,0,0,13,4.963Z"></path></g></svg>
                </div>
                {subject.subjectName}
            </header>
            <Info subject={subject}/>
            <MainTable subject={subject}/>
        </div>
    )
}