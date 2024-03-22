import React from 'react'

const FormElement = ({type, label, placeholder, fieldRef, hasError}) => {
    const classes = "form-control w-full px-3 py-1.5 text-slate-700 rounded border-b-2 border-slate-300 focus:border-lime-200 focus:outline-none "
    
    return (
    <div className='form-group mb-4 mx-6'>
        <label className='block text-left font-bold text-green-dark text-lg'>{label}</label>
        {type === 'textarea' ? (
            <textarea className={classes} rows= "5" placeholder= {placeholder} {...fieldRef}/>
        ):(
            <input className={classes} type= {type} placeholder= {placeholder} {...fieldRef}/>
        )}
        {hasError && <p className='form_error text-red-600 text-sm italic'>{`${label} is required`}</p>}
    </div>
  )
}

export default FormElement