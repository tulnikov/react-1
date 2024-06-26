import './Costs.css'
// import CostItem from "./CostItem";
import Card from '../UI/Card'
import CostFilter from './CostFilter';
import {useState} from 'react'
import CostList from './CostList';
import CostDiagram from "./CostDiagram";

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
                <CostDiagram costs={filteredCosts} />
                <CostList costs={filteredCosts}/>


            </Card>
        </div>

    )
}

export default Costs;