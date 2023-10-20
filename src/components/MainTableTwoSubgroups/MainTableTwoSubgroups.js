import React, {useCallback, useEffect, useState} from "react";
import style from "../MainTable/MainTable.module.css";
import FillTheList from "../svgs/FillTheList";
import {useSelector} from "react-redux";
import Delete from "../svgs/Delete";



export default function MainTableTwoSubgroups(props) {
    const subject = props.subject
    const setPodgroups = props.setPodgroups
    const setAdditionalInfo = props.setAdditionalInfo

    const teachers = useSelector(state => state.teachers.teachers)
    const teachersOptions = teachers.map(teacher => <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)
    teachersOptions.push(<option key={subject.uniqueId + teachers[0].id} value={''} selected={true}>Вакансия</option>)

    const [info, setInfo] = useState(subject.additionalInfo)
    const [activeTeacher1, setActiveTeacher1] = useState('')
    const [activeTeacher2, setActiveTeacher2] = useState('')

    const [labs1, setLabs1] = useState('')
    const [pract1, setPract1] = useState('')
    const [sem1, setSem1] = useState('')
    const [ex1, setEx1] = useState('')

    const [labs2, setLabs2] = useState('')
    const [pract2, setPract2] = useState('')
    const [sem2, setSem2] = useState('')
    const [ex2, setEx2] = useState('')

    const [countS1, setCountS1] = useState(Math.ceil(+subject.studentsNumber / 2))
    const [countS2, setCountS2] = useState(subject.studentsNumber - countS1)

    const [podgroup1, setPodgroup1] = useState(subject.podgroups[0])
    const [podgroup2, setPodgroup2] = useState(subject.podgroups[1])

    const handleActiveTeacher1 = useCallback(() => {
        if (activeTeacher1 !== "") {
            if (subject.practicHours !== "0") setPract1(activeTeacher1)
            if (subject.laboratoryHours !== "0") setLabs1(activeTeacher1)
            if (subject.seminarHours !== "0") setSem1(activeTeacher1)

            setEx1(activeTeacher1)
        }
    }, [activeTeacher1])

    const handleActiveTeacher2 = useCallback(() => {
        if (activeTeacher2 !== "") {
            if (subject.practicHours !== "0") setPract2(activeTeacher2)
            if (subject.laboratoryHours !== "0") setLabs2(activeTeacher2)
            if (subject.seminarHours !== "0") setSem2(activeTeacher2)

            setEx2(activeTeacher2)
        }
    }, [activeTeacher2])

    const handleDeleteSubgroup = useCallback(() => {
            setPodgroups([{}])
        }, []
    );


    useEffect(() => {
        const podgroup1 = {
            countStudents: countS1,
            laboratoryTeacher: labs1,
            lectureTeacher: activeTeacher1,
            practiceTeacher: pract1,
            seminarTeacher: sem1
        }
        if (subject.exam) {
            podgroup1.examTeacher = ex1
        } else if (subject.offset) {
            podgroup1.offsetTeacher = ex1
        } else {
            podgroup1.examTeacher = ""
            podgroup1.offsetTeacher = ""
        }
        setPodgroup1(podgroup1)
    }, [activeTeacher1, labs1, pract1, sem1, ex1, countS1]);

    useEffect(() => {
        const podgroup2 = {
            countStudents: countS2,
            laboratoryTeacher: labs2,
            lectureTeacher: activeTeacher2,
            practiceTeacher: pract2,
            seminarTeacher: sem2
        }
        if (subject.exam) {
            podgroup2.examTeacher = ex2
        } else if (subject.offset) {
            podgroup2.offsetTeacher = ex2
        } else {
            podgroup2.examTeacher = ""
            podgroup2.offsetTeacher = ""
        }
        setPodgroup2(podgroup2)
    }, [activeTeacher2, labs2, pract2, sem2, ex2, countS2]);

    useEffect(() => {
        setPodgroups([podgroup1, podgroup2])
    }, [podgroup1, podgroup2])
    return (
        <table className={style.table}>

            <thead className={style.thead2}>
            <tr>
                <th>Занятие</th>
                <th>Часы</th>
                <th>Подгруппа 1</th>
                <th>
                    <div className={style.flex}>
                        Подгруппа 2
                        <button className={style.deleteBtn} onClick={() => handleDeleteSubgroup()}>
                            <div className={style.svgContainer}>
                                <Delete/>
                            </div>
                        </button>
                    </div>
                </th>
            </tr>
            </thead>


            <tbody className={style.tbody2}>
            <tr>
                <td>Лекции</td>
                <td>{subject.lecturesHours}</td>
                <td>
                    <div className={style.flex}>
                        <select disabled={subject.lecturesHours === "0"}
                                value={subject.lecturesHours === "0" ? "" : activeTeacher1}
                                onChange={(e) => {
                                    setActiveTeacher1(e.target.value)
                                }}>
                            {teachersOptions}
                        </select>
                        <button className={style.fillBtn} onClick={() => handleActiveTeacher1()}>
                            <div className={style.svgContainer}>
                                <FillTheList/>
                            </div>
                        </button>
                    </div>
                </td>
                <td>
                    <div className={style.flex}>
                        <select disabled={subject.lecturesHours === "0"}
                                value={subject.lecturesHours === "0" ? "" : activeTeacher2}
                                onChange={(e) => {
                                    setActiveTeacher2(e.target.value)
                                }}>
                            {teachersOptions}
                        </select>
                        <button className={style.fillBtn} onClick={() => handleActiveTeacher2()}>
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
                            value={subject.laboratoryHours === "0" ? "" : labs1}
                            onChange={(e) => {
                                setLabs1(e.target.value)
                            }}>
                        {teachersOptions}
                    </select>
                </td>
                <td>
                    <select disabled={subject.laboratoryHours === "0"}
                            value={subject.laboratoryHours === "0" ? "" : labs2}
                            onChange={(e) => {
                                setLabs2(e.target.value)
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
                            value={subject.practicHours === "0" ? "" : pract1}
                            onChange={(e) => {
                                setPract1(e.target.value)
                            }}>
                        {teachersOptions}
                    </select>
                </td>
                <td>
                    <select disabled={subject.practicHours === "0"}
                            value={subject.practicHours === "0" ? "" : pract2}
                            onChange={(e) => {
                                setPract2(e.target.value)
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
                            value={subject.seminarHours === "0" ? "" : sem1}
                            onChange={(e) => {
                                setSem1(e.target.value)
                            }}>
                        {teachersOptions}
                    </select>
                </td>
                <td>
                    <select disabled={subject.seminarHours === "0"}
                            value={subject.seminarHours === "0" ? "" : sem2}
                            onChange={(e) => {
                                setSem2(e.target.value)
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
                            setEx1(e.target.value)
                        }} value={ex1}>
                            {teachersOptions}
                        </select>
                    </td>
                    <td>
                        <select onChange={(e) => {
                            setEx2(e.target.value)
                        }} value={ex2}>
                            {teachersOptions}
                        </select>
                    </td>
                </tr>
            }
            <tr>
                <td>Количество человек</td>
                <td></td>
                <td className={style.inputTd}><input value={countS1} onChange={(e) => {
                    setCountS1(e.target.value)
                    setCountS2(subject.studentsNumber - e.target.value)
                }}/></td>
                <td className={style.inputTd}><input value={countS2} onChange={(e) => {
                    setCountS2(e.target.value)
                    setCountS1(subject.studentsNumber - e.target.value)
                }}/></td>
            </tr>

            <tr>
                <td>Примечание<br/><span>(для составления расписания)</span></td>
                <td></td>
                <td className={style.info} colSpan='2'><textarea value={info}
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