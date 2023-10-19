import Info from "../Info/Info";
import MainTable from "../MainTable/MainTable";
import style from './Card.module.css'
import React, {useState, useCallback} from "react";
import Book from "../svgs/Book";

export default  function Card(props) {
    const subject = props.subject;
    console.log(subject)

    const [lectureTeacher, setLectureTeacher] = useState("0")
    const [laboratoryTeacher, setLaboratoryTeacher] = useState("0")
    const [practicTeacher, setPracticTeacher] =  useState("0")
    const [seminarTeacher, setSeminarTeacher] =  useState("0")
    const [exTeacher, setExTeacher]= useState("0")

    // const handleSave = useCallback(
    //     () => {
    //         //
    //     },
    //     [lectureTeacher,laboratoryTeacher,practicTeacher,seminarTeacher,exTeacher],
    // );



    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <header className={style.header}>
                    <div className={style.svgContainer}>
                        <Book/>
                    </div>
                    {subject.subjectName}
                </header>
                <Info subject={subject}/>
                <MainTable subject={subject}
                           setLectureTeacher={setLectureTeacher}
                           setLaboratoryTeacher={setLaboratoryTeacher}
                           setPracticTeacher={setPracticTeacher}
                           setSeminarTeacher={setSeminarTeacher}
                           setExTeacher={setExTeacher}
                />
            </div>
            <button className={style.save}>Сохранить</button>
        </div>
    )
}