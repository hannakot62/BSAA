import React, {useEffect, useState} from "react";
import style from './MainTable.module.css'
import {useSelector} from "react-redux";

export default function MainTable(props) {
    const subject = props.subject
    const teachers = useSelector(state => state.teachers.teachers)
    const teachersOptions = teachers.map(teacher => <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)
    teachersOptions.push(<option key={subject.uniqueId + teachers[0].id} value={0} selected={true}>Вакансия</option>)

    const [additionalInfo, setAdditionalInfo] = useState(subject.additionalInfo)

    return (
        <table className={style.table}>
            <thead>
            <tr>
                <th>Занятие</th>
                <th>Часы</th>
                <th >
                    <div className={style.flex}>
                        Преподаватель
                        <button className={style.addSubgroup}>
                            <div className={style.svgContainer}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M4 12H20M12 4V20" stroke="#3c4b64" strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
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
                        <select disabled={subject.lecturesHours === "0"}>
                            {teachersOptions}
                        </select>
                        <button className={style.fillBtn}>
                            <div className={style.svgContainer}>
                                <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"
                                     stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"><title>list-task</title>
                                        <desc>Created with sketchtool.</desc>
                                        <g id="text-edit" strokeWidth="0.00024000000000000003" fill="none"
                                           fillRule="evenodd">
                                            <g id="list-task" fill="#ffffff">
                                                <path
                                                    d="M9,13 L19,13 C19.5522847,13 20,13.4477153 20,14 C20,14.5522847 19.5522847,15 19,15 L9,15 C8.44771525,15 8,14.5522847 8,14 C8,13.4477153 8.44771525,13 9,13 Z M9,17 L19,17 C19.5522847,17 20,17.4477153 20,18 C20,18.5522847 19.5522847,19 19,19 L9,19 C8.44771525,19 8,18.5522847 8,18 C8,17.4477153 8.44771525,17 9,17 Z M15,9 L19,9 C19.5522847,9 20,9.44771525 20,10 C20,10.5522847 19.5522847,11 19,11 L15,11 C14.4477153,11 14,10.5522847 14,10 C14,9.44771525 14.4477153,9 15,9 Z M7.74264069,10.9142136 L4,7.17157288 L5.41421356,5.75735931 L7.74264069,8.08578644 L12.8284271,3 L14.2426407,4.41421356 L7.74264069,10.9142136 Z"
                                                    id="Shape"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Лабораторные работы</td>
                <td>{subject.laboratoryHours}</td>
                <td>
                    <select disabled={subject.laboratiryHours === "0"}>
                        {teachersOptions}
                    </select>
                </td>
            </tr>
            <tr>
                <td>Практические</td>
                <td>{subject.practicHours}</td>
                <td>
                    <select disabled={subject.practicHours === "0"}>
                        {teachersOptions}
                    </select>
                </td>
            </tr>
            <tr>
                <td>Семинарские</td>
                <td>{subject.seminarHours}</td>
                <td>
                    <select disabled={subject.seminarHours === "0"}>
                        {teachersOptions}
                    </select>
                </td>
            </tr>
            {(subject.exam || subject.offset) &&
                <tr>
                    <td>{subject.exam ? "Экзамен" : "Зачёт"}</td>
                    <td></td>
                    <td>
                        <select>
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