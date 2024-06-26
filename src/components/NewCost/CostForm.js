import React, {useState} from "react";
import './CostForm.css'

const CostForm = (props) => {

    // const [userInput, setUserInput] = useState(
    //     {
    //         'name': '',
    //         'amount': '',
    //         'date': ''
    //     }
    // );

    const [inputName, setInputName] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // }
        // setUserInput((previousState) => {
        //         return {
        //             ...previousState,
        //             name: event.target.value
        //         }
        //     })

    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })

    }
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })

    }

    const submitHandler = (event) => {
        event.preventDefault()

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        props.onSaveCostData(costData)
        // console.log(costData)
        setInputName('')
        setInputAmount('')
        setInputDate('')
    }

    return <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label>Название</label>
                <input type='text' onChange={nameChangeHandler} value={inputName}/>
            </div>
            <div className='new-cost__control'>
                <label>Сумма</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={inputAmount}/>
            </div>
            <div className='new-cost__control'>
                <label>Дата</label>
                <input type='date' min='2020-01-01' max='2024-12-31' onChange={dateChangeHandler} value={inputDate}/>
            </div>
            <div className='new-costs__actions'>
                <button type='submit'>Добавить расход</button>
            </div>
        </div>
    </form>
}

export default CostForm;