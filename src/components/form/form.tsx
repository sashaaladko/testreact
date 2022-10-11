import React from "react";

interface IProps{

}

const Form:React.FC<IProps>=({})=>{
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        
            <div className="form">
            <label>first name</label>
            <input {...register('firstName', {required:true})}/>
            <div>
                {errors?.firstName&&<p>поле обязательно для заполнения</p>}
            </div>
            <label>last name</label>
            <input {...register('lastName',{required:true} )}/>
            <div>
                {errors?.lastName&&<p>поле обязательно для заполнения</p>}
            </div>
            <label>phone number</label>
            <input {...register('number', {pattern: /^[((+375)|(80))+((29)|(25)|(44))+(\d{7})]/})} type='tel'/>
            <label>e-mail</label>
            <input {...register('email', {pattern:/^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/})} type='email'/>
            <label><input {...register('chekbox')} type="checkbox"/>даю согласие на обучение</label>
            <input type='submit' />
           </div>
            
        </form>
    )
}

export default Form