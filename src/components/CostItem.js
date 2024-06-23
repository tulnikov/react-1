import './CostItem.css'
import CostDay from "./CostDay";
import Card from "./Card";

function CostItem(props){

    return (
        <Card className='cost-item'>
            <CostDay date={props.date}/>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>

        </Card>)

}

export default CostItem