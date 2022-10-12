import React, { useState } from "react";
import { cartChosenOutlet } from "../../features/outlets/outletSlice";
import { useAppDispatch } from "../../hooks";
import './form.css'

interface IProps{
    handleSubmit: any;
    register: any;
    onSubmit: any;
    errors:any;
    outletItems:any;
}

const Form:React.FC<IProps>=({handleSubmit, register, onSubmit, errors, outletItems})=>{
    const dispatch = useAppDispatch()
    const[outlet, setOutlet] = useState<string>('')
    dispatch(cartChosenOutlet(outlet))
    return (
    <div className="formContainer">
       
       
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
            <label className="inputName">first name</label>
            <input {...register('firstName', {required:true})} placeholder='введите имя'/>
            <div>
                {errors?.firstName&&<p>поле обязательно для заполнения</p>}
            </div>
            <label className="inputName">last name</label>
            <input {...register('lastName',{required:true} )} placeholder='введите фамилию'/>
            <div>
                {errors?.lastName&&<p>поле обязательно для заполнения</p>}
            </div>
            <label className="inputName">phone number</label>
            <input {...register('number', {pattern: /^[((+375)|(80))+((29)|(25)|(44))+(\d{7})]/})} type='tel' placeholder="введите номер телефона"/>
            <label className="inputName">e-mail</label>
            <input {...register('email', {pattern:/^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/})} type='email' placeholder="введите e-mail"/>
            <label className="inputName">outlet</label>
            <div className="dropdown">
            <input className='inputOutlet' placeholder="выберите точку" value={outlet}></input>
                <ul>
                {outletItems.map((item:any)=>(
                        <li><span><input placeholder="выберите точку" type="radio" name="outlets" value={item} onChange={(e: any)=>setOutlet(e.target.value)}/>{item}</span></li>
                ))}
                </ul>
            </div><br/>
            <label className="inputName"><input {...register('chekbox')} type="checkbox"/>даю согласие на обучение</label>
            <input type='submit' />
           </div>
            
        </form>

        <div>
        <span className="selectedItem">товар будет доставлен в {outlet}</span><br/>
     
        </div>
    </div>
    )
}

export default Form