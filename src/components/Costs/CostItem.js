import './CostItem.css'
import CostDay from "./CostDay";
import Card from "../UI/Card";

const CostItem = (props) => {

    return (
        <li>
        <Card className='cost-item'>
            <CostDay date={props.date}/>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
        </Card>
        </li>)
}

export default CostItem