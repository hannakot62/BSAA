import Info from "../Info/Info";
import MainTable from "../MainTable/MainTable";
import style from './Card.module.css'
import React, {useState} from "react";
import Book from "../svgs/Book";
import MainTableTwoSubgroups from "../MainTableTwoSubgroups/MainTableTwoSubgroups";

export default  function Card(props) {
    const subject = props.subject;
    const [podgroups, setPodgroups] = useState(subject.podgroups)
    const [additionalInfo, setAdditionalInfo] = useState(subject.additionalInfo)


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
                {podgroups.length === 1 ?
                    <MainTable subject={subject}
                               setPodgroups={setPodgroups}
                               setAdditionalInfo={setAdditionalInfo}
                    />
                    : <MainTableTwoSubgroups subject={subject}
                                             setPodgroups={setPodgroups}
                                             setAdditionalInfo={setAdditionalInfo}
                    />
                }
            </div>
            <button className={style.save}>Сохранить</button>
        </div>
    )
}