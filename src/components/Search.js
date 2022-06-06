import {useState} from "react"
import { Card, Row, Col, Divider, Input, Button } from "antd";
import "../index.css"

export default function Search(props){
    const [formState, setFormState] = useState({search: ""})

    const onInputChange = (event) =>{
         
         let value
            value = event.target.value
        const newFormState = {[event.target.name]: value}
       
        setFormState(newFormState)
        props.filterFood(newFormState)
       
      }

    return(
        <form className = "width">
        <label>Search</label>
        <Input name ="search" value={formState.search} type="text" onChange={onInputChange} />
        </form>
        )
}