import React, {useCallback, useState} from "react";
import style from "../MainTable/MainTable.module.css";
import FillTheList from "../svgs/FillTheList";
import {useSelector} from "react-redux";
import Delete from "../svgs/Delete";



export default function MainTableTwoSubgroups(props) {
    const subject = props.subject

    const setLectureTeacher1 = props.setLectureTeacher1
    const setLaboratoryTeacher1 = props.setLaboratoryTeacher1
    const setPracticTeacher1 = props.setPracticTeacher1
    const setSeminarTeacher1 = props.setSeminarTeacher1
    const setExTeacher1 = props.setExTeacher1

    const setLectureTeacher2 = props.setLectureTeacher2
    const setLaboratoryTeacher2 = props.setLaboratoryTeacher2
    const setPracticTeacher2 = props.setPracticTeacher2
    const setSeminarTeacher2 = props.setSeminarTeacher2
    const setExTeacher2 = props.setExTeacher2

    const setCountStudents1 = props.setCountStudents1
    const setCountStudents2 = props.setCountStudents2

    const teachers = useSelector(state => state.teachers.teachers)
    const teachersOptions = teachers.map(teacher => <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)
    teachersOptions.push(<option key={subject.uniqueId + teachers[0].id} value={'0'} selected={true}>Вакансия</option>)

    const [additionalInfo, setAdditionalInfo] = useState(subject.additionalInfo)
    const [activeTeacher1, setActiveTeacher1] = useState('0')
    const [activeTeacher2, setActiveTeacher2] = useState('0')

    const [labs1, setLabs1] = useState('0')
    const [pract1, setPract1] = useState('0')
    const [sem1, setSem1] = useState('0')
    const [ex1, setEx1] = useState('0')

    const [labs2, setLabs2] = useState('0')
    const [pract2, setPract2] = useState('0')
    const [sem2, setSem2] = useState('0')
    const [ex2, setEx2] = useState('0')

    const [countS1, setCountS1] =useState(subject.podgroups[0].countStudents)
    const [countS2, setCountS2] =useState(subject.podgroups[1].countStudents)

    const handleActiveTeacher1 = useCallback(() => {
        if (activeTeacher1 !== "0") {
            if (subject.lecturesHours !== "0") setLectureTeacher1(activeTeacher1)
            if (subject.practicHours !== "0") setPracticTeacher1(activeTeacher1)
            if (subject.laboratoryHours !== "0") setLaboratoryTeacher1(activeTeacher1)
            if (subject.seminarHours !== "0") setSeminarTeacher1(activeTeacher1)

            setExTeacher1(activeTeacher1)

            setLabs1(activeTeacher1);
            setPract1(activeTeacher1);
            setSem1(activeTeacher1);
            setEx1(activeTeacher1)
        }
    }, [activeTeacher1])


    const handleActiveTeacher2 = useCallback(() => {
        if (activeTeacher2 !== "0") {
            if (subject.lecturesHours !== "0") setLectureTeacher2(activeTeacher2)
            if (subject.practicHours !== "0") setPracticTeacher2(activeTeacher2)
            if (subject.laboratoryHours !== "0") setLaboratoryTeacher2(activeTeacher2)
            if (subject.seminarHours !== "0") setSeminarTeacher2(activeTeacher2)

            setExTeacher2(activeTeacher2)

            setLabs2(activeTeacher2);
            setPract2(activeTeacher2);
            setSem2(activeTeacher2);
            setEx2(activeTeacher2)
        }
    }, [activeTeacher2])


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
                        <button className={style.deleteBtn}>
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
                                value={subject.lecturesHours === "0" ? "0" : activeTeacher1}
                                onChange={(e) => {
                                    setActiveTeacher1(e.target.value)
                                    setLectureTeacher1(e.target.value)
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
                                value={subject.lecturesHours === "0" ? "0" : activeTeacher2}
                                onChange={(e) => {
                                    setActiveTeacher2(e.target.value)
                                    setLectureTeacher2(e.target.value)
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
                            value={subject.laboratoryHours === "0" ? "0" : labs1}
                            onChange={(e) => {
                                setLabs1(e.target.value)
                                setLaboratoryTeacher1(e.target.value)
                            }}>
                        {teachersOptions}
                    </select>
                </td>
                <td>
                    <select disabled={subject.laboratoryHours === "0"}
                            value={subject.laboratoryHours === "0" ? "0" : labs2}
                            onChange={(e) => {
                                setLabs2(e.target.value)
                                setLaboratoryTeacher2(e.target.value)
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
                            value={subject.practicHours === "0" ? "0" : pract1}
                            onChange={(e) => {
                                setPract1(e.target.value)
                                setPracticTeacher1(e.target.value)
                            }}>
                        {teachersOptions}
                    </select>
                </td>
                <td>
                    <select disabled={subject.practicHours === "0"}
                            value={subject.practicHours === "0" ? "0" : pract2}
                            onChange={(e) => {
                                setPract2(e.target.value)
                                setPracticTeacher2(e.target.value)
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
                            value={subject.seminarHours === "0" ? "0" : sem1}
                            onChange={(e) => {
                                setSem1(e.target.value)
                                setSeminarTeacher1(e.target.value)
                            }}>
                        {teachersOptions}
                    </select>
                </td>
                <td>
                    <select disabled={subject.seminarHours === "0"}
                            value={subject.seminarHours === "0" ? "0" : sem2}
                            onChange={(e) => {
                                setSem2(e.target.value)
                                setSeminarTeacher2(e.target.value)
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
                            setExTeacher1(e.target.value)
                        }} value={ex1}>
                            {teachersOptions}
                        </select>
                    </td>
                    <td>
                        <select onChange={(e) => {
                            setEx2(e.target.value)
                            setExTeacher2(e.target.value)
                        }} value={ex2}>
                            {teachersOptions}
                        </select>
                    </td>
                </tr>
            }
            <tr>
                <td>Количество человек</td>
                <td></td>
                <td className={style.inputTd}><input value={countS1} onChange={(e)=>{
                    setCountStudents1(e.target.value)
                    setCountS1(e.target.value)
                }}/></td>
                <td className={style.inputTd}><input value={countS2} onChange={(e)=>{
                    setCountStudents2(e.target.value)
                    setCountS2(e.target.value)
                }}/></td>
            </tr>

            <tr>
                <td>Примечание<br/><span>(для составления расписания)</span></td>
                <td></td>
                <td className={style.info} colSpan='2'><textarea value={additionalInfo}
                                                                 onChange={(e) => setAdditionalInfo(e.target.value)}/>
                </td>
            </tr>
            </tbody>
        </table>
    )
}