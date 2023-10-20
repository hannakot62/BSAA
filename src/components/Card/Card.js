import Info from "../Info/Info";
import MainTable from "../MainTable/MainTable";
import style from './Card.module.css'
import React, {useState, useCallback} from "react";
import Book from "../svgs/Book";
import MainTableTwoSubgroups from "../MainTableTwoSubgroups/MainTableTwoSubgroups";
import {useSelector} from "react-redux";

export default  function Card(props) {
    const subject = props.subject;
    const [podgroups, setPodgroups] = useState(subject.podgroups)
    const [additionalInfo, setAdditionalInfo] = useState(subject.additionalInfo)
    const subjects = useSelector(state => state.subjects.subjects)

    const handleSave = useCallback(
        async () => {
            const sentSubjects = [...subjects.filter(s => s.uniqueId !== subject.uniqueId)]
            const current = {...subject}
            current.additonalInfo = additionalInfo
            current.podgroups = [...podgroups]
            sentSubjects.push(current)
            fetch("https://bgaa.by/test_result", {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(sentSubjects)
            })
                .then(res => {
                    console.log(res)
                    console.log("Запрос на сохранение не может быть успешным в связи с CORS политикой сервера")
                })
                .catch(error => {
                    console.error(error)
                })
        },
        [additionalInfo, podgroups],
    );

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
            <button className={style.save} onClick={() => handleSave()}>Сохранить</button>
        </div>
    )
}