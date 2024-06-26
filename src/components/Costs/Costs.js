import './Costs.css'
import CostItem from "./CostItem";
import Card from '../UI/Card'
import CostFilter from './CostFilter';
import {useState} from 'react'

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState("2020")

    const yearChangeHandler = (year) => {
        // console.log(year);
        setSelectedYear(year)
    }

    const filteredCosts = props.costs.filter(
        cost => {
            return cost.date.getFullYear().toString() === selectedYear
        }
    )

    return (
        <div>
            <Card className='costs'>
                <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
                {/*{console.log(props)}*/}
                {filteredCosts.map((prop) => (
                    <CostItem
                        key={prop.id}
                        date={prop.date}
                        description={prop.description}
                        amount={prop.amount}
                    />
                ))}


            </Card>
        </div>

    )
}

export default Costs;