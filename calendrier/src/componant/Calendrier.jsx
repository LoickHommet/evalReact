import { useState } from "react"


 const month = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']

export function Calendrier(){
    const [date, setDate] = useState(new Date());
    console.log(getDaysInMonth(date.getMonth(), date.getFullYear()));
    return(
        <div className="col-8">
            {/* Year */}
            <div className="row">
              
                <div className="col-8 text-center">
                    <span>{date.getFullYear()}</span>
                </div>
             
            </div>
            {/* Month */}
            <div className="row">
              
                <div className="col-8 text-center">
                    <span>{month[date.getMonth()]}</span>
                </div>
              
            </div>
            <table>
                {
                    getDaysInMonth(date.getMonth(), date.getFullYear()).map((val, index) => {
                        let week = 1;
                        if (index % 7 === 1) {
                            return (
                                <tr key={index}>
                                    {getDaysInMonth(date.getMonth(), date.getFullYear()).map((val, index) => {
                                        if (index > week) {
                                            return <td key={index}>{index}</td>
                                        }
                                        return null;
                                    })}
                                </tr>
                            )
                        }
                        week++;
                        return null;
                    })
                }
            </table>
        </div>
    )
}

function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
}