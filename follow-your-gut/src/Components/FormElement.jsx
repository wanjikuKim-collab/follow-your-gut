import React from 'react'

const FormElement = ({type, label, placeholder, fieldRef, hasError}) => {
    const classes = "form-control w-full px-3 py-1.5 text-slate-700 rounded border border-solid border-slate-300 focus:border-lime-200 focus:outline-none"
    
    return (
    <div className='form-group mb-6'>
        <label className='block text-left font-bold text-green-dark underline text-lg mb-2'>{label}</label>
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