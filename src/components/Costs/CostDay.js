import './CostDay.css'

const CostDay = (props) => {
    const month = props.date.toLocaleString('ru-RU', {month: "long"})
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString('ru-RU', {day: "2-digit"})

    return (
        <div className="cost-day">
            <div className='cost-day__month'>{month}</div>
            <div className='cost-day__year'>{year}</div>
            <div className='cost-day__day'>{day}</div>
        </div>
    )
}

export default CostDay;