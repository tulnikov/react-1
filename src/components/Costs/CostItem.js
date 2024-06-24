import './CostItem.css'
import CostDay from "./CostDay";
import Card from "../UI/Card";
import React, {useState} from "react";

const CostItem = (props) => {

    useState();
    const [description, setDescription] = useState(props.description);
    // let description = props.description;


    const changeDescriptionHandler = () => {
        console.log(description)
        setDescription('New text')
    }
    return (
        <Card className='cost-item'>
            <CostDay date={props.date}/>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
            <button onClick={changeDescriptionHandler}>Изменить описание</button>
        </Card>)

}

export default CostItem