import { useState } from "react"
import { useCalendrier } from "../hook/useCalendrier"


export function Calendrier(){

    const { calendarRows, selectedDate, todayFormatted, getNextMonth, getPrevMonth,jour,mois,getNextYear, getPrevYear, } = useCalendrier();
    console.log(selectedDate.getFullYear())

    return(
        <>
        <div>
           <a href="#" onClick={getPrevMonth}>&lt;&lt;</a>    {`${mois[selectedDate.getMonth()]}`} <a href="#" onClick={getNextMonth}>&gt;&gt;</a> 
           <a href="#" onClick={getPrevYear}>&lt;&lt;</a>    {`${selectedDate.getFullYear()}`} <a href="#" onClick={getNextYear}>&gt;&gt;</a>  
          <table className="table">
            <thead>
              <tr>
                {jour.map(day => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {
                Object.values(calendarRows).map(cols => {
                  return <tr key={cols[0].date}>
                    {cols.map(col => (
                      col.date === todayFormatted
                        ? <td key={col.date} className={`${col.classes} today`}>
                          {col.value}
                        </td>
                        : <td key={col.date} className={col.classes}>{col.value}</td>
                    ))}
                  </tr>
                })
              } 
            </tbody>
          </table>
          </div>
          </>
      );

}

