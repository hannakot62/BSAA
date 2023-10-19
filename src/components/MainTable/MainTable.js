import React, {useEffect, useState} from "react";
import style from './MainTable.module.css'
import {useSelector} from "react-redux";

export default function MainTable(props) {
    const subject = props.subject
    const teachers = useSelector(state => state.teachers.teachers)
    const teachersOptions = teachers.map(teacher => <option key={teacher.id} value={teacher.id}>{teacher.name}</option>)
    teachersOptions.push(<option key={subject.uniqueId+teachers[0].id} value={0} selected={true}>Вакансия</option>)
    return (
        <table className={style.table}>
            <thead>
            <tr>
                <th>Занятие</th>
                <th>Часы</th>
                <th>Преподаватель
                    <button>+</button>
                </th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Лекции</td>
                <td>{subject.lecturesHours}</td>
                <td>
                    <select disabled={subject.lecturesHours === "0"}>
                         {teachersOptions}
                    </select>
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
                <td><textarea/></td>
            </tr>
            </tbody>
        </table>
    )
}