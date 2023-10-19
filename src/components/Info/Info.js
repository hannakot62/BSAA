import React from "react";
import style from './Info.module.css'


export default function Info(props) {
    const subject = props.subject
    return (
        <table className={style.table}>
            <tbody>
            <tr>
                <td className={style.header}>Группа</td>
                <td>{subject.groupName}</td>
                <td className={style.header}>Курс</td>
                <td>{subject.course}</td>
            </tr>
            <tr>
                <td className={style.header}>Количество курсантов</td>
                <td>{subject.studentsNumber}</td>
                <td className={style.header}>Семестр</td>
                <td>{subject.semestr}</td>
            </tr>
            </tbody>
        </table>
    )
}