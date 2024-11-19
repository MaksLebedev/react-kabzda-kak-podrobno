import { useEffect, useState } from "react"

type PropsType = {

}

const get2digitsString = (num: number) => {
    return num < 10 ? ('0' + num) : num
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        }, 1000)
    }, [])

    // const secondsStrings = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    // const secondsStrings = get2digitsString(date.getSeconds())

    // const minutesStrings = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    // const minutesStrings = get2digitsString(date.getMinutes())

    // const hoursStrings = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    // const hoursStrings = get2digitsString(date.getHours())

    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    )
}