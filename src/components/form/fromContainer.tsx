import React from "react";
import { useForm } from "react-hook-form";
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
    const {handleSubmit, register, formState:{errors}} = useForm<IFormInputs>({
        defaultValues:{
            firstName:'',
            lastName:'',
            chekbox: false,
            number: '',
            email: ''

        }
    })
  const onSubmit = (data:IFormInputs) =>{
    console.log({...data,outlet:outlet});
  }

  return(
    <Form/>
  )
}

export default FormContainer