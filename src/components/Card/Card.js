import Info from "../Info/Info";
import MainTable from "../MainTable/MainTable";
import style from './Card.module.css'
import React, {useState, useCallback} from "react";
import Book from "../svgs/Book";
import MainTableTwoSubgroups from "../MainTableTwoSubgroups/MainTableTwoSubgroups";

export default  function Card(props) {
    const subject = props.subject;
    console.log(subject)

    const [lectureTeacher1, setLectureTeacher1] = useState("0")
    const [laboratoryTeacher1, setLaboratoryTeacher1] = useState("0")
    const [practicTeacher1, setPracticTeacher1] =  useState("0")
    const [seminarTeacher1, setSeminarTeacher1] =  useState("0")
    const [exTeacher1, setExTeacher1]= useState("0")

    const [lectureTeacher2, setLectureTeacher2] = useState("0")
    const [laboratoryTeacher2, setLaboratoryTeacher2] = useState("0")
    const [practicTeacher2, setPracticTeacher2] =  useState("0")
    const [seminarTeacher2, setSeminarTeacher2] =  useState("0")
    const [exTeacher2, setExTeacher2]= useState("0")

    const [countStudents1, setCountStudents1] = useState(0)
    const [countStudents2, setCountStudents2] = useState(0)


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
                {subject.podgroups.length === 1 ?
                    <MainTable subject={subject}
                               setLectureTeacher={setLectureTeacher1}
                               setLaboratoryTeacher={setLaboratoryTeacher1}
                               setPracticTeacher={setPracticTeacher1}
                               setSeminarTeacher={setSeminarTeacher1}
                               setExTeacher={setExTeacher1}
                    />
                    : <MainTableTwoSubgroups subject={subject}
                                             setLectureTeacher1={setLectureTeacher1}
                                             setLaboratoryTeacher1={setLaboratoryTeacher1}
                                             setPracticTeacher1={setPracticTeacher1}
                                             setSeminarTeacher1={setSeminarTeacher1}
                                             setExTeacher1={setExTeacher1}
                                             setLectureTeacher2={setLectureTeacher2}
                                             setLaboratoryTeacher2={setLaboratoryTeacher2}
                                             setPracticTeacher2={setPracticTeacher2}
                                             setSeminarTeacher2={setSeminarTeacher2}
                                             setExTeacher2={setExTeacher2}

                                             setCountStudents1={setCountStudents1}
                                             setCountStudents2={setCountStudents2}
                    />
                }
            </div>
            <button className={style.save}>Сохранить</button>
        </div>
    )
}