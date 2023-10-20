import React, {useCallback, useState, useEffect} from "react";
import style from './MainTable.module.css'
import {useSelector} from "react-redux";
import Plus from "../svgs/Plus";
import FillTheList from "../svgs/FillTheList";

export default function MainTable(props) {
    const subject = props.subject
    const setPodgroups = props.setPodgroups
    const setAdditionalInfo = props.setAdditionalInfo

    const teachers = useSelector(state => state.teachers.teachers)
    const teachersOptions = teachers.map(teacher => <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)
    teachersOptions.push(<option key={subject.uniqueId + teachers[0].id} value={''} selected={true}>Вакансия</option>)

    const [info, setInfo] = useState(subject.additionalInfo)
    const [activeTeacher, setActiveTeacher] = useState('')

    const [labs, setLabs] = useState('')
    const [pract, setPract] = useState('')
    const [sem, setSem] = useState('')
    const [ex, setEx] = useState('')

    const handleActiveTeacher = useCallback(() => {
        if (activeTeacher !== "") {
            if (subject.practicHours !== "0") setPract(activeTeacher)
            if (subject.laboratoryHours !== "0") setLabs(activeTeacher)
            if (subject.seminarHours !== "0") setSem(activeTeacher)

            setEx(activeTeacher)
        }
    }, [activeTeacher])

    useEffect(() => {
        const podgroup = {
            countStudents: subject.studentsNumber,
            laboratoryTeacher: labs,
            lectureTeacher: activeTeacher,
            practiceTeacher: pract,
            seminarTeacher: sem
        }
        if (subject.exam) {
            podgroup.examTeacher = ex
        } else if (subject.offset) {
            podgroup.offsetTeacher = ex
        } else {
            podgroup.examTeacher = ""
            podgroup.offsetTeacher = ""
        }
        setPodgroups([
            podgroup
        ])
    }, [activeTeacher, labs, pract, sem, ex]);


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
                                value={subject.lecturesHours === "0" ? "" : activeTeacher}
                                onChange={(e) => {
                                    setActiveTeacher(e.target.value)
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
                            value={subject.laboratoryHours === "0" ? "" : labs}
                            onChange={(e) => {
                                setLabs(e.target.value)
                            }}>
                        {teachersOptions}
                    </select>
                </td>
            </tr>

            <tr>
                <td>Практические</td>
                <td>{subject.practicHours}</td>
                <td>
                    <select disabled={subject.practicHours === "0"}
                            value={subject.practicHours === "0" ? "" : pract}
                            onChange={(e) => {
                                setPract(e.target.value)
                            }}>
                        {teachersOptions}
                    </select>
                </td>
            </tr>

            <tr>
                <td>Семинарские</td>
                <td>{subject.seminarHours}</td>
                <td>
                    <select disabled={subject.seminarHours === "0"}
                            value={subject.seminarHours === "0" ? "" : sem}
                            onChange={(e) => {
                                setSem(e.target.value)
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
                        }} value={ex}>
                            {teachersOptions}
                        </select>
                    </td>
                </tr>
            }
            <tr>
                <td>Примечание<br/><span>(для составления расписания)</span></td>
                <td></td>
                <td className={style.info}><textarea value={info}
                                                     onChange={(e) => {
                                                         setInfo(e.target.value)
                                                         setAdditionalInfo(e.target.value)
                                                     }}/>
                </td>
            </tr>
            </tbody>
        </table>
    )
}