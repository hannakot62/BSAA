import React, {useCallback, useState} from "react";
import style from './MainTable.module.css'
import {useSelector} from "react-redux";
import Plus from "../svgs/Plus";
import FillTheList from "../svgs/FillTheList";

export default function MainTable(props) {
    const subject = props.subject
    const setLectureTeacher = props.setLectureTeacher
    const setLaboratoryTeacher = props.setLaboratoryTeacher
    const setPracticTeacher = props.setPracticTeacher
    const setSeminarTeacher = props.setSeminarTeacher
    const setExTeacher = props.setExTeacher

    const teachers = useSelector(state => state.teachers.teachers)
    const teachersOptions = teachers.map(teacher => <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)
    teachersOptions.push(<option key={subject.uniqueId + teachers[0].id} value={'0'} selected={true}>Вакансия</option>)

    const [additionalInfo, setAdditionalInfo] = useState(subject.additionalInfo)
    const [activeTeacher, setActiveTeacher] = useState('0')

    const [labs, setLabs] = useState('0')
    const [pract, setPract] = useState('0')
    const [sem, setSem] = useState('0')
    const [ex, setEx] = useState('0')

    const handleActiveTeacher = useCallback(() => {
        if (activeTeacher !== "0") {
            if(subject.lecturesHours!=="0") setLectureTeacher(activeTeacher)
            if(subject.practicHours!=="0") setPracticTeacher(activeTeacher)
            if(subject.laboratoryHours!=="0") setLaboratoryTeacher(activeTeacher)
            if(subject.seminarHours!=="0") setSeminarTeacher(activeTeacher)

            setExTeacher(activeTeacher)

            setLabs(activeTeacher);
            setPract(activeTeacher);
            setSem(activeTeacher);
            setEx(activeTeacher)


        }
    }, [activeTeacher])

    return (
        <table className={style.table}>

            <thead>
            <tr>
                <th>Занятие</th>
                <th>Часы</th>
                <th>
                    <div className={style.flex}>
                        Преподаватель
                        <button className={style.addSubgroup}>
                            <div className={style.svgContainer}>
                                <Plus/>
                            </div>
                        </button>
                    </div>
                </th>
            </tr>
            </thead>


            <tbody>
            <tr>
                <td>Лекции</td>
                <td>{subject.lecturesHours}</td>
                <td>
                    <div className={style.flex}>
                        <select disabled={subject.lecturesHours === "0"}
                                value={subject.lecturesHours === "0" ? "0" : activeTeacher}
                                onChange={(e) => {
                                    setActiveTeacher(e.target.value)
                                    setLectureTeacher(e.target.value)
                                }}>
                            {teachersOptions}
                        </select>
                        <button className={style.fillBtn} onClick={() => handleActiveTeacher()}>
                            <div className={style.svgContainer}>
                                <FillTheList/>
                            </div>
                        </button>
                    </div>
                </td>
            </tr>

            <tr>
                <td>Лабораторные работы</td>
                <td>{subject.laboratoryHours}</td>
                <td>
                    <select disabled={subject.laboratoryHours === "0"}
                            value={subject.laboratoryHours === "0" ? "0" : labs}
                            onChange={(e) => {
                                setLabs(e.target.value)
                                setLaboratoryTeacher(e.target.value)
                            }}>
                        {teachersOptions}
                    </select>
                </td>
            </tr>

            <tr>
                <td>Практические</td>
                <td>{subject.practicHours}</td>
                <td>
                    <select disabled={subject.practicHours === "0"} value={subject.practicHours === "0" ? "0" : pract}
                            onChange={(e) => {
                                setPract(e.target.value)
                                setPracticTeacher(e.target.value)
                            }}>
                        {teachersOptions}
                    </select>
                </td>
            </tr>

            <tr>
                <td>Семинарские</td>
                <td>{subject.seminarHours}</td>
                <td>
                    <select disabled={subject.seminarHours === "0"} value={subject.seminarHours === "0" ? "0" : sem}
                            onChange={(e) => {
                                setSem(e.target.value)
                                setSeminarTeacher(e.target.value)
                            }}>
                        {teachersOptions}
                    </select>
                </td>
            </tr>

            {(subject.exam || subject.offset) &&
                <tr>
                    <td>{subject.exam ? "Экзамен" : "Зачёт"}</td>
                    <td></td>
                    <td>
                        <select onChange={(e) => {
                            setEx(e.target.value)
                            setExTeacher(e.target.value)
                        }} value={ex}>
                            {teachersOptions}
                        </select>
                    </td>
                </tr>
            }
            <tr>
                <td>Примечание<br/><span>(для составления расписания)</span></td>
                <td></td>
                <td className={style.info}><textarea value={additionalInfo}
                                                     onChange={(e) => setAdditionalInfo(e.target.value)}/></td>
            </tr>
            </tbody>
        </table>
    )
}