import {useState} from "react"
import { Card, Row, Col, Divider, Input, Button } from "antd";
import "../index.css"

export default function AddFormFood(props){
    const startingFormState = {
        name:"",
        image: "",
        calories:"",
        servings:"",
        hide: true
      }
      const [formState, setFormState] = useState(startingFormState)
      
      
      const handleSubmit = (event)=>{
      event.preventDefault()
            console.log("formState:", formState)
            props.addFood(formState)
            setFormState(startingFormState)
            //axios.post("/someURL")
          }
    
        const onInputChange = (event) =>{
            let value
            value = event.target.value
            const newFormState = {...formState, [event.target.name]: value}
            setFormState(newFormState)
          }

  
          let newHideState = {...formState}
        function toggleForm(){
            if(formState.hide)
               newHideState = {...formState, hide: false }
              else 
                newHideState = {...formState, hide: true }
             
           
            setFormState(newHideState)   
        }
     return(
        formState.hide ?
        <table>
        <tr className="hide"><form onSubmit={handleSubmit} >
        <label>Name</label>
        <Input name ="name" value={formState.name} type="text" onChange={onInputChange} />

        <label>Image</label>
        <Input name ="image" value={formState.image} type="text" onChange={onInputChange} />

        <label>Calories</label>
        <Input name ="calories" value={formState.calories} type="text" onChange={onInputChange} />

        <label>Servings</label>
        <Input name ="servings" value={formState.servings} type="text" onChange={onInputChange} />

        <button type="submit">Create</button>
        </form></tr>
        <Button onClick={toggleForm}>Add New Food</Button>
        </table>
        :
        <>
        <form onSubmit={handleSubmit} className = "width">
        <label>Name</label>
        <Input name ="name" value={formState.name} type="text" onChange={onInputChange} />

        <label>Image</label>
        <Input name ="image" value={formState.image} type="text" onChange={onInputChange} />

        <label>Calories</label>
        <Input name ="calories" value={formState.calories} type="text" onChange={onInputChange} />

        <label>Servings</label>
        <Input name ="servings" value={formState.servings} type="text" onChange={onInputChange} />

        <button type="submit">Create</button>
        </form>
      
        <Button onClick={toggleForm}>Hide Form</Button>
        </>

    )


}