import React from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../hooks";
import Form from "./form";


interface IFormInputs{
    firstName: string;
    lastName: string;
    chekbox: boolean;
    number: string;
    email: string;
}

interface IProps{

}

const FormContainer:React.FC<IProps>=()=>{
    const outlet = useAppSelector(store=>store.outlet.chosenOutlet)
    const {handleSubmit, register, formState:{errors}} = useForm<IFormInputs>({
        defaultValues:{
            firstName:'',
            lastName:'',
            chekbox: false,
            number: '',
            email: '',
        }
    })
  const onSubmit = (data:IFormInputs) =>{
    console.log({...data, outlet});
  }
  const outletItems = useAppSelector((store)=>store.outlet.outletItems)

  return(
    <Form handleSubmit={handleSubmit} register={register} onSubmit={onSubmit} errors={errors} outletItems={outletItems}/>
  )
}

export default FormContainer