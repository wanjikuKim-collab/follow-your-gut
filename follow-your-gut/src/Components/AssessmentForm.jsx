import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import FormElement from './FormElement'

const AssessmentForm = () => {
  const {control, handleSubmit, formState: {errors}} = useForm({
    defaultValues:{
      age: 0,
      gender: '',
      height: 0,
      weight: 0,
      allergies: '',
      underlyingConditions: '',
      dietaryRestrictions: '',
      dietaryPreferences: '',
    }
  })

  const onSubmit = data => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
        name='age'
        control={control}
        rules={{required: true}}
        render={({field})=>(
          <FormElement
            label= "Age"
            type= "number"
            placeholder="What is your age?"
            fieldRef={field}
            hasError={errors.name?.type === 'required'}/>
        )}/>

        <Controller
                name='gender'
                control={control}
                rules={{required: true}}
                render={({field})=>(
                  <FormElement
                    label= "Gender"
                    type= "text"
                    placeholder="What is your Gender?"
                    fieldRef={field}
                    hasError={errors.name?.type === 'required'}/>
                )}/>

        {/* <Controller
                name='height'
                control={control}
                rules={{required: false}}
                render={({field})=>(
                  <FormElement
                    label= "Height"
                    type= "number"
                    placeholder="What is your height?"
                    fieldRef={field}
                    hasError={errors.name?.type === 'required'}/>
                )}/>

        <Controller
                name='weight'
                control={control}
                rules={{required: false}}
                render={({field})=>(
                  <FormElement
                    label= "Weight"
                    type= "number"
                    placeholder="What is your height?"
                    fieldRef={field}
                    hasError={errors.name?.type === 'required'}/>
                )}/> */}

        <Controller
                name='allergies'
                control={control}
                rules={{required: true}}
                render={({field})=>(
                  <FormElement
                    label= "Allergies"
                    type= "text"
                    placeholder="Do you have any allergies?"
                    fieldRef={field}
                    hasError={errors.name?.type === 'required'}/>
                )}/>

        <Controller
                name='underlyingConditions'
                control={control}
                rules={{required: true}}
                render={({field})=>(
                  <FormElement
                    label= "Underlying Medical Conditions"
                    type= "text"
                    placeholder="Do you have any underlying medical conditions?"
                    fieldRef={field}
                    hasError={errors.name?.type === 'required'}/>
                )}/>

        <Controller
                name='dietaryRestrictions'
                control={control}
                rules={{required: false}}
                render={({field})=>(
                  <FormElement
                    label= "Dietary Restrictions"
                    type= "text"
                    placeholder="Do you have any dietary restrictions or food intolerances?"
                    fieldRef={field}
                    hasError={errors.name?.type === 'required'}/>
                )}/>

        <Controller
                name='dietaryPreference'
                control={control}
                rules={{required: false}}
                render={({field})=>(
                  <FormElement
                    label= "Dietary preferences"
                    type= "text"
                    placeholder="What food do you prefer?"
                    fieldRef={field}
                    hasError={errors.name?.type === 'required'}/>
                )}/>
                <button type='submit' className='w-1/2 bg-green-dark text-white text-lg font-bold py-2 my-6 px-4 rounded-xl shadow-md md:px-8 capitalize'>Submit</button>
      </form>
    </div>
  )
}

export default AssessmentForm